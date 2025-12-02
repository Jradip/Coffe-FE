// // src/components/api.js
// import axios from "axios";

// const API_BASE_URL = "https://api-kedai-genz.vercel.app";

// /**
//  * Axios instance utama
//  */
// const apiClient = axios.create({
//   baseURL: API_BASE_URL,
//   headers: {
//     "Content-Type": "application/json",
//   },
// });

// /**
//  * Interceptor: otomatis kirim Authorization: Bearer <token>
//  * kalau token tersimpan di localStorage.
//  */
// apiClient.interceptors.request.use(
//   (config) => {
//     const token = localStorage.getItem("token");
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error) => Promise.reject(error)
// );

// /* ============================
//  * AUTH USER
//  * ============================ */

// /**
//  * Register user
//  * POST /register
//  */
// export async function registerUser({ email, password, name }) {
//   const res = await apiClient.post("/register", {
//     email,
//     password,
//     name,
//   });
//   return res.data; // sesuaikan dengan response API kamu
// }

// /**
//  * Login user
//  * POST /login
//  * Response dari Postman:
//  * { "message": "<JWT_TOKEN>" }
//  */
// export async function loginUser({ email, password }) {
//   const res = await apiClient.post("/login", { email, password });

//   // sesuai screenshot: token ada di field "message"
//   const token = res.data?.message;
//   if (token) {
//     localStorage.setItem("token", token);
//   }

//   return res.data;
// }

// /**
//  * Logout user (front-end only)
//  */
// export function logoutUser() {
//   localStorage.removeItem("token");
// }

// /* ============================
//  * PRODUK
//  * ============================ */

// /**
//  * GET /get-produk
//  * Response (contoh):
//  * {
//  *   "data": {
//  *     "Makanan": [...],
//  *     "Minuman": [...],
//  *     "Dessert": [...]
//  *   }
//  * }
//  */
// export async function getProdukList() {
//   const res = await apiClient.get("/get-produk");
//   return res.data;
// }

// /**
//  * GET /get-produk/:id
//  */
// export async function getProdukDetail(id) {
//   const res = await apiClient.get(`/get-produk/${id}`);
//   return res.data;
// }

// /* ============================
//  * KERANJANG
//  * (nama endpoint sesuaikan dengan Postman kalau beda)
//  * ============================ */

// /**
//  * GET /get-keranjang
//  */
// export async function getKeranjang() {
//   const res = await apiClient.get("/get-keranjang");
//   return res.data;
// }

// /**
//  * POST /add-keranjang
//  * body: { produk_id, quantity }
//  */
// export async function addToKeranjang({ produk_id, quantity }) {
//   const res = await apiClient.post("/add-keranjang", {
//     produk_id,
//     quantity,
//   });
//   return res.data;
// }

// /**
//  * PUT /update-quantity
//  * body: { produk_id, quantity }
//  */
// export async function updateKeranjangItem({ produk_id, quantity }) {
//   const res = await apiClient.put("/update-quantity", {
//     produk_id,
//     quantity,
//   });
//   return res.data;
// }

// /**
//  * DELETE /delete-item
//  * body: { produk_id }
//  */
// export async function deleteKeranjangItem({ produk_id }) {
//   const res = await apiClient.delete("/delete-item", {
//     data: { produk_id },
//   });
//   return res.data;
// }

// /* ============================
//  * ORDER
//  * ============================ */

// /**
//  * POST /create-order
//  * body contoh: { alamat, metode_pembayaran, catatan, kupon_code, ... }
//  * sesuaikan dengan Postman kamu
//  */
// export async function createOrder(payload) {
//   const res = await apiClient.post("/create-order", payload);
//   return res.data;
// }

// /**
//  * GET /get-order
//  * -> history order user yang sedang login
//  */
// export async function getOrderHistory() {
//   const res = await apiClient.get("/get-order");
//   return res.data; // { history: [...] }
// }

// /* ============================
//  * KUPON
//  * ============================ */

// /**
//  * GET /get-kupon
//  */
// export async function getKuponList() {
//   const res = await apiClient.get("/get-kupon");
//   return res.data;
// }

// /**
//  * POST /apply-kupon
//  * body: { code: "HEMAT20", total_harga: 100000, ... }
//  */
// export async function applyKupon(payload) {
//   const res = await apiClient.post("/apply-kupon", payload);
//   return res.data;
// }

// /**
//  * Export default client kalau sewaktu-waktu mau dipakai langsung
//  */
// export default apiClient;
