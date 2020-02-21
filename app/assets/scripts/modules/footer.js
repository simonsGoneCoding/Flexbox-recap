const insertCurrentYear = () => {
  const year = document.getElementById("year");
  year.innerText = new Date().getFullYear();
};

export default insertCurrentYear;
