class WeekDays {
  daysEs = ["lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "domingo"];
  daysEn = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];

  constructor(lang) {
    this.lang = lang;
    if(WeekDays.instance) {
      return WeekDays.instance;
    }

    WeekDays.instance = this;
  }

  getDays() {
    if(this.lang === "es") {
      return this.daysEs;
    } else {
      return this.daysEn;
    }
  }
}

const weekDays = new WeekDays("en");
console.log(weekDays.getDays());
const weekDays2 = new WeekDays("es");
console.log(weekDays2.getDays());
