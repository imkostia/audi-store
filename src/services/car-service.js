export default class CarService {
  data = [
    {
      id: 1,
      brand: "Audi",
      model: "RS6",
      price: "144000",
      currency: "$",
      power: "600",
      acceleration: "3.6",
      maxSpeed: "305",
      description:
        "Ділова зустріч чи сімейна подорож: обирайте Audi RS 6 Avant. Адже цей динамічний спортивний автомобіль пропонує безкомпромісний дизайн разом з високою придатністю для повсякденної експлуатації. Це любов з першої поїздки.",
    },
    {
      id: 2,
      brand: "Audi",
      model: "S7",
      price: "83000",
      currency: "$",
      power: "344",
      acceleration: "5.1",
      maxSpeed: "280",
      description:
        "Елегантний вигляд, динамічна віддача потужності, інтер'єр, оздоблений високоякісними матеріалами - Audi S7 Sportback приваблює зовнішніми та внутрішніми особливостями. Крім того, з нашим спортивним купе ви зможете оцінити новітні технології допомоги водієві та можливості мультимедіа.",
    },
    {
      id: 3,
      brand: "Audi",
      model: "RS e-tron GT",
      price: "164000",
      currency: "$",
      power: "600",
      acceleration: "3.3",
      maxSpeed: "240",
      description:
        "Прагнення по-новому інтерпретувати сутність автомобіля помітне, у тому числі, в стриманому дизайні, джерелом натхнення для якого слугувала аеродинамічна досконалість. Прогресивна розкіш виступає рушійним імпульсом, який піднімає емоції від керування на новий рівень. Характерна особливість: емблеми RS із червоним ромбом.",
    },
  ];

  getCars() {
    return new Promise((resolve) => {
      setTimeout(() => resolve(this.data), 800);
    });
  }

  addNewCar(newCar) {
    return new Promise((resolve) => {
      this.data.push(newCar);

      setTimeout(() => resolve(this.data), 800);
    });
  }

  deleteCar(carId) {
    return new Promise((resolve) => {
      this.data = this.data.filter((car) => car.id !== carId);

      setTimeout(() => resolve(this.data), 800);
    });
  }

  editCar(editedCar) {
    return new Promise((resolve) => {
      const index = this.data.findIndex((car) => car.id === editedCar.id);
      this.data[index] = editedCar;
      setTimeout(() => resolve(this.data), 800);
    });
  }
}
