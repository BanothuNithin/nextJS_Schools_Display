import { IncomingForm } from "formidable";
import path from "path";
import fs from "fs";
import pool from "../../lib/db";

export const config = {
  api: { bodyParser: false },
};

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const uploadDir = path.join(process.cwd(), "public", "schoolImages");
      if (!fs.existsSync(uploadDir)) {
        fs.mkdirSync(uploadDir, { recursive: true });
      }

      const form = new IncomingForm({
        uploadDir,
        keepExtensions: true,
        multiples: false,
      });

      // ✅ Wrap form.parse in a Promise for formidable v3+
      const { fields, files } = await new Promise((resolve, reject) => {
        form.parse(req, (err, fields, files) => {
          if (err) reject(err);
          else resolve({ fields, files });
        });
      });

      console.log("Fields:", fields);
      console.log("Files:", files);

      // ✅ fields are plain strings in formidable v3
      const name = fields.name || "";
      const address = fields.address || "";
      const city = fields.city || "";
      const state = fields.state || "";
      const contact = parseInt(fields.contact || "0", 10); // ensure integer
      const email_id = fields.email_id || "";
      const image = files.image ? path.basename(files.image.filepath) : null;

      const [result] = await pool.query(
        "INSERT INTO schools (name, address, city, state, contact, image, email_id) VALUES (?, ?, ?, ?, ?, ?, ?)",
        [name, address, city, state, contact, image, email_id]
      );

      return res.status(200).json({ success: true, id: result.insertId });
    } catch (err) {
      console.error("Upload/DB error:", err);
      return res.status(500).json({ error: err.message });
    }
  }

  if (req.method === "GET") {
    try {
      const [rows] = await pool.query(
        "SELECT id, name, address, city, image FROM schools"
      );
      return res.status(200).json(rows);
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  }

  return res.status(405).json({ error: "Method not allowed" });
}
