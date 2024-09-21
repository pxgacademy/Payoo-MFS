// Tailwindcss cdn
tailwind.config = {
  theme: {
    extend: {
      colors: {
        clifford: "#da373d",
      },
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
      },
    },
  },
};

const getInputById = (id) => {
  return document.getElementById(id);
};

const getInputValueById = (id) => {
  return document.getElementById(id).value;
};

const getInputInnerTextById = (id) => {
  return document.getElementById(id).innerText;
};
