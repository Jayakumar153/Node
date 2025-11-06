import http from "http";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { URL } from "url";

// // ✅ Fix for __dirname in ES Modules
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// // 🎬 Movies file path
// const moviesPath = path.join(__dirname, "data", "movies.txt");

// const server = http.createServer((req, res) => {
//     const parsedUrl = new URL(req.url, `http://${req.headers.host}`);
//     const pathname = parsedUrl.pathname;
//     const query = parsedUrl.searchParams;

//     res.setHeader("Content-Type", "text/plain");

//     // 🏠 Home Route
//     if (pathname === "/") {
//         res.end("🎬 Welcome to Leo Movie Booking Server");
//     }

//     // 🎥 Movies Route
//     else if (pathname === "/movies") {
//         fs.readFile(moviesPath, "utf8", (err, data) => {
//             if (err) {
//                 res.statusCode = 500;
//                 return res.end("❌ Error reading movie list");
//             }
//             res.write("📂 Movies File Path: " + moviesPath + "\n\n");
//             res.write("🎥 Available Movies:\n");
//             res.end(data);
//         });
//     }

//     // 🎫 Booking Route
//     else if (pathname === "/booking") {
//         const movie = query.get("movie");
//         const user = query.get("user");

//         if (!movie || !user) {
//             res.statusCode = 400;
//             return res.end("❌ Missing query parameters. Example: /booking?movie=Leo&user=Jay");
//         }

//         const bookingFile = path.join(__dirname, "data", "bookings.txt");
//         const record = `User: ${user} booked ${movie}\n`;

//         fs.appendFile(bookingFile, record, (err) => {
//             if (err) {
//                 res.statusCode = 500;
//                 return res.end("❌ Error saving booking");
//             }
//             res.end(`✅ Booking confirmed for ${user} — ${movie}`);
//         });
//     }

//     // ☎️ Contact Route
//     else if (pathname === "/contact") {
//         res.end("📞 Contact us at: leo.support@movies.com");
//     }

//     // ❌ Invalid Route
//     else {
//         res.statusCode = 404;
//         res.end("❌ 404 Not Found");
//     }
// });

// const PORT = 3000;
// server.listen(PORT, () => {
//     console.log(`🚀 Leo Movie Booking Server running at http://localhost:${PORT}`);
// });
