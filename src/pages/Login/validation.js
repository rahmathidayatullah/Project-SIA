const rules = {
  email: {
    required: { value: true, message: "Email tidak boleh kosong" },
    maxLength: { value: 255, message: "Maxsimal karakter 255" },
  },
  password: {
    required: { value: true, message: "Password tidak boleh kosong" },
    maxLength: {
      value: 255,
      message: "Maximal panjang password 255",
    },
  },
};

export { rules };
