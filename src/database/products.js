const products = [{
    "id": 1,
    "title": "Lexus",
    "description": "Bypass Left Hypogastric Vein to Lower Vein, Open Approach",
    "price": 269.99,
    "category": "Runte-Waelchi",
    "imageUrl": "https://dummyimage.com/250x250.png/eba120",
    "stock": 18
  }, {
    "id": 2,
    "title": "GMC",
    "description": "Alteration of Upper Jaw, Percutaneous Approach",
    "price": 52.1,
    "category": "Russel, Klein and Haag",
    "imageUrl": "https://dummyimage.com/250x250.png/a42d0d",
    "stock": 17
  }, {
    "id": 3,
    "title": "GMC",
    "description": "Revision of Other Device in Peritoneal Cavity, Open Approach",
    "price": 349.81,
    "category": "Legros Inc",
    "imageUrl": "https://dummyimage.com/250x250.png/874680",
    "stock": 18
  }, {
    "id": 4,
    "title": "Oldsmobile",
    "description": "Restriction of Splenic Artery with Intraluminal Device, Percutaneous Approach",
    "price": 60.29,
    "category": "Rippin Group",
    "imageUrl": "https://dummyimage.com/250x250.png/fd223a",
    "stock": 10
  }, {
    "id": 5,
    "title": "Buick",
    "description": "Drainage of Right Radius with Drainage Device, Percutaneous Endoscopic Approach",
    "price": 486.01,
    "category": "Abernathy-Borer",
    "imageUrl": "https://dummyimage.com/250x250.png/5ad8b2",
    "stock": 10
  }, {
    "id": 6,
    "title": "Ford",
    "description": "Reposition Esophageal Vein, Open Approach",
    "price": 273.6,
    "category": "Barton, Ruecker and Hirthe",
    "imageUrl": "https://dummyimage.com/250x250.png/3f7d59",
    "stock": 17
  }, {
    "id": 7,
    "title": "Lotus",
    "description": "Removal of Spacer from Sacrococcygeal Joint, Percutaneous Approach",
    "price": 216.36,
    "category": "Ziemann Group",
    "imageUrl": "https://dummyimage.com/250x250.png/ab270a",
    "stock": 19
  }, {
    "id": 8,
    "title": "Lexus",
    "description": "Extirpation of Matter from Left Toe Phalanx, Percutaneous Endoscopic Approach",
    "price": 289.1,
    "category": "Schmeler-Kuhlman",
    "imageUrl": "https://dummyimage.com/250x250.png/c3d8bc",
    "stock": 7
  }, {
    "id": 9,
    "title": "Chevrolet",
    "description": "High Dose Rate (HDR) Brachytherapy of Thyroid using Palladium 103 (Pd-103)",
    "price": 111.47,
    "category": "Stamm Inc",
    "imageUrl": "https://dummyimage.com/250x250.png/f86655",
    "stock": 9
  }, {
    "id": 10,
    "title": "Lexus",
    "description": "Repair Hymen, Percutaneous Endoscopic Approach",
    "price": 379.88,
    "category": "Kovacek, Towne and Kuphal",
    "imageUrl": "https://dummyimage.com/250x250.png/9d54db",
    "stock": 13
  }, {
    "id": 11,
    "title": "Mitsubishi",
    "description": "Release Bilateral Carotid Bodies, Percutaneous Approach",
    "price": 473.61,
    "category": "Corwin, Wehner and Lemke",
    "imageUrl": "https://dummyimage.com/250x250.png/517843",
    "stock": 6
  }, {
    "id": 12,
    "title": "BMW",
    "description": "Excision of Left Upper Lung Lobe, Percutaneous Endoscopic Approach",
    "price": 172.86,
    "category": "Fisher Group",
    "imageUrl": "https://dummyimage.com/250x250.png/30b1f3",
    "stock": 15
  }, {
    "id": 13,
    "title": "Oldsmobile",
    "description": "Removal of Infusion Device from Right Elbow Joint, Open Approach",
    "price": 176.41,
    "category": "Dickens Group",
    "imageUrl": "https://dummyimage.com/250x250.png/6f4530",
    "stock": 10
  }, {
    "id": 14,
    "title": "Subaru",
    "description": "Occlusion of Upper Esophagus, Open Approach",
    "price": 55.74,
    "category": "Rogahn Group",
    "imageUrl": "https://dummyimage.com/250x250.png/d864b9",
    "stock": 19
  }, {
    "id": 15,
    "title": "Isuzu",
    "description": "Contact Radiation of Duodenum",
    "price": 74.2,
    "category": "Lueilwitz-Spencer",
    "imageUrl": "https://dummyimage.com/250x250.png/aa7653",
    "stock": 7
  }, {
    "id": 16,
    "title": "Toyota",
    "description": "Bypass Right Foot Vein to Lower Vein with Nonautologous Tissue Substitute, Percutaneous Endoscopic Approach",
    "price": 30.38,
    "category": "Wiegand, Koelpin and Boehm",
    "imageUrl": "https://dummyimage.com/250x250.png/8d8836",
    "stock": 17
  }, {
    "id": 17,
    "title": "Pontiac",
    "description": "Destruction of Right Ventricle, Percutaneous Approach",
    "price": 470.48,
    "category": "Witting and Sons",
    "imageUrl": "https://dummyimage.com/250x250.png/17f477",
    "stock": 20
  }, {
    "id": 18,
    "title": "Bentley",
    "description": "Transfer Acoustic Nerve to Glossopharyngeal Nerve, Open Approach",
    "price": 25.14,
    "category": "Cummings and Sons",
    "imageUrl": "https://dummyimage.com/250x250.png/d2df30",
    "stock": 15
  }, {
    "id": 19,
    "title": "Mazda",
    "description": "Release Left Orbit, Open Approach",
    "price": 379.85,
    "category": "Schultz-Boyer",
    "imageUrl": "https://dummyimage.com/250x250.png/1822d0",
    "stock": 7
  }, {
    "id": 20,
    "title": "Mercedes-Benz",
    "description": "Plain Radiography of Right Fallopian Tube using Low Osmolar Contrast",
    "price": 306.82,
    "category": "Hintz-Walter",
    "imageUrl": "https://dummyimage.com/250x250.png/e0ca51",
    "stock": 17
  }] 


  export default products;