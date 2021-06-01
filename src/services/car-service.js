export default class CarService {
  data = [
    {
      id: 1,
      brand: "Audi",
      model: "RS6",
      startPrice: "3262466",
      currency: "грн",
      power: "600",
      acceleration: "3.6",
      maxSpeed: "305",
      description:
        "Ділова зустріч чи сімейна подорож: обирайте Audi RS 6 Avant. Адже цей динамічний спортивний автомобіль пропонує безкомпромісний дизайн разом з високою придатністю для повсякденної експлуатації. Це любов з першої поїздки.",
      imageUrl:
        "//cdn-ua.audi.at/media/Poi_Model_Image_Overview_Component/59083-model-image-overview/dh-550-eee234/53a4de3d/1622036676/rs6.png",
    },
    {
      id: 2,
      brand: "Audi",
      model: "S7",
      startPrice: "2490110",
      currency: "грн",
      power: "344",
      acceleration: "5.1",
      maxSpeed: "280",
      description:
        "Елегантний вигляд, динамічна віддача потужності, інтер'єр, оздоблений високоякісними матеріалами - Audi S7 Sportback приваблює зовнішніми та внутрішніми особливостями. Крім того, з нашим спортивним купе ви зможете оцінити новітні технології допомоги водієві та можливості мультимедіа.",
      imageUrl:
        "//cdn-ua.audi.at/media/Poi_Model_Image_Overview_Component/59333-model-image-overview/dh-550-eee234/5cad4dea/1622036058/2019.png",
    },
    {
      id: 3,
      brand: "Audi",
      model: "RS e-tron GT",
      startPrice: "4632056",
      currency: "грн",
      power: "600",
      acceleration: "3.3",
      maxSpeed: "240",
      description:
        "Прагнення по-новому інтерпретувати сутність автомобіля помітне, у тому числі, в стриманому дизайні, джерелом натхнення для якого слугувала аеродинамічна досконалість. Прогресивна розкіш виступає рушійним імпульсом, який піднімає емоції від керування на новий рівень. Характерна особливість: емблеми RS із червоним ромбом.",
      imageUrl:
        "//cdn-ua.audi.at/media/TextImage_ImageEnlarge_Component/67012-677500-image/dh-480-d8ec43/88015e0d/1615384290/rs-side.png",
    },
  ];

  getCars() {
    return new Promise((resolve) => {
      setTimeout(() => resolve(this.data), 800);
    });
  }
}
