import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }
  productList = [
    {
      productName: 'Mango',
      link: 'mango',
      scientificName: 'Mangifera indica',
      color: '#E4B042B0',
      imageLink: "../../assets/images/mango.jpg",
      description: "Indulge in the sweetness of nature with our premium mangoes. Sourced from orchards, our mangoes are grown without the use of chemicals, ensuring pure and delicious flavor. Experience the tropical delight of mangoes and savor the exquisite taste of nature's finest fruit.",
      category: 'fruits'
    },
    {
      productName: 'Grapes',
      link: 'grapes',
      scientificName: 'Vitis vinifera',
      color: '#B6B8B5B0',
      imageLink: "../../assets/images/grapes.jpg",
      description: "Delight in the lusciousness of our premium grapes. Cultivated in vineyards, our grapes are nurtured without harmful chemicals, resulting in juicy and flavorful fruits. Experience the natural sweetness and crisp texture of our grapes, a healthy and refreshing treat straight from the vine.",
      category: 'fruits'
    },
    {
      productName: 'Banana',
      link: 'banana',
      scientificName: 'Musa acuminata',
      color: '#F4D15BB0',
      imageLink: "../../assets/images/banana.jpg",
      description: "Experience the perfection of bananas with our premium selection.Grown in plantations, our bananas are free from harmful chemicals, offering a natural and wholesome taste.Enjoy the creamy texture and sweet flavor of our bananas, a nutritious choice for your well- being.",
      category: 'fruits'
    },
    {
      productName: 'Orange',
      link: 'orange',
      scientificName: 'Citrus sinensis',
      color: '#FE8D00B0',
      imageLink: "../../assets/images/orange.jpg",
      description: "Indulge in the tangy sweetness of our premium oranges. Grown in orchards, our oranges are free from harmful genetically modified organisms. Bursting with juicy flavor and packed with vitamin C, our oranges are a refreshing and healthy choice for citrus lovers.",
      category: 'fruits'
    },
    {
      productName: 'Apple',
      link: 'apple',
      scientificName: 'Malus pumila',
      color: '#E85E4BB0',
      imageLink: "../../assets/images/apple.jpg",
      description: "Experience the crisp and natural goodness of our premium apples. Grown in orchards with utmost care, our apples are free from harmful GMOs. Savor the juicy and flavorful bite of our apples, a nutritious and delightful choice for a healthy lifestyle.",
      category: 'fruits'
    },
    {
      productName: 'Watermelon',
      link: 'watermelon',
      scientificName: 'Citrullus lanatus',
      color: '#86974DB0',
      imageLink: "../../assets/images/watermelon.jpg",
      description: "Quench your thirst with the refreshing sweetness of our premium watermelons. Grown in fields, our watermelons are free from harmful chemicals, ensuring pure and juicy flavor. Experience the burst of hydrating delight and natural goodness with our watermelons, a summer favorite for all.",
      category: 'fruits'
    },
    {
      productName: 'Papaya',
      link: 'papaya',
      scientificName: 'Carica papaya',
      color: '#EB8F52B0',
      imageLink: "../../assets/images/papaya.jpg",
      description: "Experience the tropical delight of our premium papayas. Grown in farms, our papayas are naturally ripened and free from harmful chemicals. Enjoy the luscious and juicy texture, along with the rich flavor and numerous health benefits of our papayas.",
      category: 'fruits'
    },
    {
      productName: 'Pineapple',
      link: 'pineapple',
      scientificName: 'Ananas comosus',
      color: '#FFD54EB0',
      imageLink: "../../assets/images/pineapple.jpg",
      description: "Savor the tropical sweetness of our premium pineapples. Grown in plantations, our pineapples are free from harmful chemicals, ensuring a pure and juicy taste. Experience the tangy and refreshing flavor, along with the numerous health benefits of our pineapples, straight from the tropical paradise.",
      category: 'fruits'
    },
    {
      productName: 'Pomegranate',
      link: 'pomegranate',
      scientificName: 'Punica granatum',
      color: '#EF6959B0',
      imageLink: "../../assets/images/pomegranate.jpg",
      description: "Indulge in the vibrant and antioxidant-rich flavor of our premium pomegranates. Grown in orchards, our pomegranates are nurtured without harmful chemicals, delivering a naturally sweet and juicy taste. Experience the delightful burst of refreshing goodness and health benefits with our pomegranates.",
      category: 'fruits'
    },
    {
      productName: 'Indian Onion',
      link: 'indian-onion',
      scientificName: 'Allium cepa',
      color: '#FFD2DBB0',
      imageLink: "../../assets/images/onion.jpg",
      description: "Discover the exceptional quality of our premium onions. Grown in fields, our onions are cultivated without harmful chemicals, resulting in flavorful and nutritious bulbs. Experience the crisp texture and aromatic flavor of our onions, a versatile ingredient that adds depth to a variety of culinary creations.",
      category: "vegetables"
    },
    {
      productName: 'Shallots / Small Onion',
      link: 'shallots',
      scientificName: 'Allium ascalonicum',
      color: '#F2ABCBB0',
      imageLink: "../../assets/images/shallots.jpg",
      description: "Experience the gourmet excellence of our premium shallots. Cultivated in fields, our shallots are renowned for their rich flavor and delicate aroma. Grown without harmful chemicals, our shallots offer a unique taste and culinary versatility. Elevate your dishes with the exceptional quality of our shallots.",
      category: "vegetables"
    },
    {
      productName: 'Tomato',
      link: 'tomato',
      scientificName: '',
      color: '#E44F2BB0',
      imageLink: "../../assets/images/tomato.jpg",
      description: "Experience the best of produce with our premium tomatoes.Grown with care and without the use of harmful chemicals, our tomatoes offer exceptional taste and nutritional value.Discover the difference of farming and elevate your culinary creations with the goodness of nature's finest tomatoes.",
      category: "vegetables"
    },
    {
      productName: 'Ginger',
      link: 'ginger',
      scientificName: 'Zingiber officinale',
      color: '#E8B786B0',
      imageLink: "../../assets/images/ginger.jpg",
      description: "Discover the vibrant warmth of our premium ginger. Grown in farms, our ginger is cultivated without harmful chemicals, preserving its natural flavor and health benefits. Experience the distinctive zing and aromatic essence of our ginger, a versatile spice that adds depth to culinary creations.",
      category: "vegetables"
    },
    {
      productName: 'Garlic',
      link: 'garlic',
      scientificName: 'Allium sativum',
      color: '#A5A1ACB0',
      imageLink: "../../assets/images/garlic.jpg",
      description: "Experience the pungent and flavorful essence of our premium garlic.Grown in farms, our garlic is free from harmful chemicals, ensuring its pure and natural taste.Enjoy the culinary versatility and numerous health benefits of our garlic, a staple ingredient in kitchens worldwide.",
      category: "vegetables"
    },
    {
      productName: 'Green Chilli',
      link: 'chilli',
      scientificName: 'Capsicum annuum',
      color: '#6AA801B0',
      imageLink: "../../assets/images/chilli.jpg",
      description: "Ignite your taste buds with the fiery goodness of our premium green chillies. Grown in farms, our green chillies are free from harmful chemicals, delivering a vibrant and spicy flavor. Experience the perfect balance of heat and freshness with our green chillies, a must-have ingredient in various cuisines.",
      category: "vegetables"
    },
    {
      productName: 'Maize dried (Cholam)',
      link: 'maize',
      scientificName: 'Zea mays',
      color: '#E4CEA1B0',
      imageLink: "../../assets/images/maize.jpg",
      description: "Experience the wholesome goodness of our premium dried maize (cholam). Cultivated in farms, our maize is carefully dried to retain its nutritional value. Free from harmful chemicals, our premium maize is versatile and can be used in a variety of culinary preparations. Discover the natural goodness of cholam with us.",
      category: 'millets'
    },
    {
      productName: 'Pearl Millet (Kambu)',
      link: 'pearlmillet',
      scientificName: 'Pennisetum glaucum',
      color: '#EFE1CAB0',
      imageLink: "../../assets/images/pearlmillet.jpg",
      description: "Embrace the nutritional power of our premium Pearl Millet (Kambu). Sourced from hygienic farms, our millet is packed with essential nutrients. Cultivated without harmful chemicals, our premiumpremium Pearl Millet offers a nutty flavor and versatility for various culinary creations. Discover the wholesome benefits of Kambu with us.",
      category: 'millets'
    },
    {
      productName: 'Finger Millet (Ragi/Keppai)',
      link: 'ragi',
      scientificName: '',
      color: '#855C3BB0',
      imageLink: "../../assets/images/ragi.jpg",
      description: "Unlock the nutritional treasure of our premium Finger Millet (Ragi/Keppai). Sourced from hygienic farms, our millet is rich in fiber, calcium, and iron. Grown without harmful chemicals, our premium Finger Millet offers a unique nutty flavor and is a versatile ingredient for healthy and delicious meals. Discover the goodness of Ragi/Keppai with us.",
      category: 'millets'
    },
    {
      productName: 'Foxtail Millet (Thinai)',
      link: 'foxtailmillet',
      scientificName: 'Eleusine coracana',
      color: '#CDBA95B0',
      imageLink: "../../assets/images/foxtailmillet.jpg",
      description: "Discover the ancient grain's charm with our premium Foxtail Millet (Thinai). Sourced from hygienic farms, our millet is rich in fiber, protein, and essential nutrients. Grown without harmful chemicals, our premium Foxtail Millet offers a nutty flavor and versatility for nutritious and flavorful culinary creations. Experience the goodness of Thinai with us.",
      category: 'millets'
    },
    {
      productName: 'Kodo Millet (Varagu)',
      link: 'kodomillet',
      scientificName: 'Paspalum scrobiculatum',
      color: '#DDBC6FB0',
      imageLink: "../../assets/images/kodomillet.jpg",
      description: "Experience the nutritional marvel of our premium Kodo Millet (Varagu). Sourced from hygienic farms, our millet is a rich source of dietary fiber and essential minerals. Grown without harmful chemicals, our premium Kodo Millet offers a nutty flavor and is a versatile grain for healthy and wholesome meals. Discover the benefits of Varagu with us.",
      category: 'millets'
    },
    {
      productName: 'Little Millet (Saamai)',
      link: 'littlemillet',
      scientificName: 'Panicum sumatrense',
      color: '#D7B186B0',
      imageLink: "../../assets/images/littlemillet.jpg",
      description: "Discover the nutritional treasure of our premium Little Millet (Saamai). Sourced from hygienic farms, our millet is packed with fiber, protein, and essential minerals. Grown without harmful chemicals, our premium Little Millet offers a delicate flavor and is perfect for creating healthy and delicious dishes. Experience the goodness of Saamai with us.",
      category: 'millets'
    },
    {
      productName: 'Barnyard Millet (Kuthiraivali)',
      link: 'barnyardmillet',
      scientificName: 'Echinochloa esculenta',
      color: '#BF9E74B0',
      imageLink: "../../assets/images/barnyardmillet.jpg",
      description: "Experience the wholesome goodness of our premium Barnyard Millet (Kuthiraivali). Sourced from hygienic farms, our millet is rich in fiber, iron, and essential nutrients. Grown without harmful chemicals, our premium Barnyard Millet offers a nutty flavor and is a versatile grain for nutritious and tasty culinary creations. Discover the benefits of Kuthiraivali with us.",
      category: 'millets'
    },
    {
      productName: 'Sorghum (Jowar)',
      link: 'sorghum',
      scientificName: 'Sorghum bicolor',
      color: '#E1C89FB0',
      imageLink: "../../assets/images/sorghum.jpg",
      description: "Explore the nutritional prowess of our premium Sorghum (Jowar). Sourced from hygienic fields, our sorghum is rich in fiber, protein, and essential minerals. Cultivated without harmful chemicals, our premium Jowar offers a mild, nutty flavor and is a versatile grain for creating wholesome and hearty meals. Experience the goodness of Sorghum with us.",
      category: 'millets'
    },
    {
      productName: 'pepper',
      link: 'pepper',
      scientificName: 'Piper nigrum',
      color: '#4A3114B0',
      imageLink: "../../assets/images/pepper.jpg",
      description: "Embark on a flavorful journey with our exquisite collection of Indian spices. Sourced from the aromatic lands of India, our spices captivate taste buds and elevate culinary experiences. From vibrant turmeric to fragrant cardamom, discover the rich heritage and enticing flavors of authentic Indian spices through our premium selection.",
      category: 'spices'
    },
    {
      productName: 'turmeric',
      link: 'turmeric',
      scientificName: 'Curcuma longa',
      color: '#C49E3BB0',
      imageLink: "../../assets/images/turmeric.jpg",
      description: "Embark on a flavorful journey with our exquisite collection of Indian spices. Sourced from the aromatic lands of India, our spices captivate taste buds and elevate culinary experiences. From vibrant turmeric to fragrant cardamom, discover the rich heritage and enticing flavors of authentic Indian spices through our premium selection.",
      category: 'spices'
    },
    {
      productName: 'cumin',
      link: 'cumin',
      scientificName: 'Cuminum cyminum',
      color: '#A7824CB0',
      imageLink: "../../assets/images/cumin.jpg",
      description: "Embark on a flavorful journey with our exquisite collection of Indian spices. Sourced from the aromatic lands of India, our spices captivate taste buds and elevate culinary experiences. From vibrant turmeric to fragrant cardamom, discover the rich heritage and enticing flavors of authentic Indian spices through our premium selection.",
      category: 'spices'
    },
    {
      productName: 'cloves',
      link: 'cloves',
      scientificName: 'Syzygium aromaticum',
      color: '#7B5F53B0',
      imageLink: "../../assets/images/cloves.jpg",
      description: "Embark on a flavorful journey with our exquisite collection of Indian spices. Sourced from the aromatic lands of India, our spices captivate taste buds and elevate culinary experiences. From vibrant turmeric to fragrant cardamom, discover the rich heritage and enticing flavors of authentic Indian spices through our premium selection.",
      category: 'spices'
    },
    {
      productName: 'cardamom',
      link: 'cardamom',
      scientificName: 'Elettaria cardamomum',
      color: '#D1D273B0',
      imageLink: "../../assets/images/cardamom.jpg",
      description: "Embark on a flavorful journey with our exquisite collection of Indian spices. Sourced from the aromatic lands of India, our spices captivate taste buds and elevate culinary experiences. From vibrant turmeric to fragrant cardamom, discover the rich heritage and enticing flavors of authentic Indian spices through our premium selection.",
      category: 'spices'
    },
    {
      productName: 'cinnamon',
      link: 'cinnamon',
      scientificName: 'Cinnamomum verum',
      color: '#865E2CB0',
      imageLink: "../../assets/images/cinnamon.jpg",
      description: "Embark on a flavorful journey with our exquisite collection of Indian spices. Sourced from the aromatic lands of India, our spices captivate taste buds and elevate culinary experiences. From vibrant turmeric to fragrant cardamom, discover the rich heritage and enticing flavors of authentic Indian spices through our premium selection.",
      category: 'spices'
    },
    {
      productName: 'Curry leaves',
      link: 'curryleaves',
      scientificName: 'Murraya koenigii',
      color: '#7CC73CB0',
      imageLink: "../../assets/images/curryleaves.jpg",
      description: "Embark on a flavorful journey with our exquisite collection of Indian spices. Sourced from the aromatic lands of India, our spices captivate taste buds and elevate culinary experiences. From vibrant turmeric to fragrant cardamom, discover the rich heritage and enticing flavors of authentic Indian spices through our premium selection.",
      category: 'spices'
    },
    {
      productName: 'Red Chilli',
      link: 'redchilli',
      scientificName: 'Capsicum annuum',
      color: '#B0041BB0',
      imageLink: "../../assets/images/redchilli.jpg",
      description: "Embark on a flavorful journey with our exquisite collection of Indian spices. Sourced from the aromatic lands of India, our spices captivate taste buds and elevate culinary experiences. From vibrant turmeric to fragrant cardamom, discover the rich heritage and enticing flavors of authentic Indian spices through our premium selection.",
      category: 'spices'
    },
    {
      productName: 'Moringa Pods',
      link: 'moringapods',
      scientificName: 'Moringa oleifera',
      color: '#57671CB0',
      imageLink: "../../assets/images/moringapods.jpg",
      description: "Experience the nutritional power of Moringa with our premium range of products. From tender Moringa pods to vibrant Moringa leaves and nutrient-rich Moringa powder, we offer nature's superfood in various forms. Sourced from hygienic farms, our Moringa products are packed with antioxidants and essential nutrients, promoting overall well-being.",
      category:"moringaProducts"
    },
    {
      productName: 'Moringa Leaves',
      link: 'moringaleaves',
      scientificName: 'Moringa oleifera',
      color: '#4D9846B0',
      imageLink: "../../assets/images/moringaleaves.jpg",
      description: "Experience the nutritional power of Moringa with our premium range of products. From tender Moringa pods to vibrant Moringa leaves and nutrient-rich Moringa powder, we offer nature's superfood in various forms. Sourced from hygienic farms, our Moringa products are packed with antioxidants and essential nutrients, promoting overall well-being.",
      category:"moringaProducts"
    },
    {
      productName: 'Moringa Powder',
      link: 'moringapowder',
      scientificName: 'Moringa oleifera',
      color: '#6B8D37B0',
      imageLink: '../../assets/images/moringa.jpg',
      description: "Experience the nutritional power of Moringa with our premium range of products. From tender Moringa pods to vibrant Moringa leaves and nutrient-rich Moringa powder, we offer nature's superfood in various forms. Sourced from hygienic farms, our Moringa products are packed with antioxidants and essential nutrients, promoting overall well-being.",
      category:"moringaProducts"
    }
  ];
  categoryList = [
    {
      categoryName: 'Millets',
      link: 'millets',
      imageLink: '../../assets/images/millets.png',
      topCategory: true
    },
    {
      categoryName: 'Vegetables',
      link: 'vegetables',
      imageLink: '../../assets/images/vegetables.png',
      topCategory: true
    },
    {
      categoryName: 'Fruits',
      link: 'fruits',
      imageLink: '../../assets/images/fruits.png',
      topCategory: true
    },
    {
      categoryName: 'Indian Spices',
      link: 'spices',
      imageLink: '../../assets/images/spices.png',
      topCategory: false
    },
    {
      categoryName: 'Rice',
      link: 'rice',
      imageLink: '../../assets/images/rice.png',
      topCategory: false
    },
    {
      categoryName: 'Moringa products',
      link: 'moringaProducts',
      imageLink: '../../assets/images/moringa.jpg',
      topCategory: true
    },
  ];

  getProductDetail(product: string) {
    return this.productList.find(x => x.link == product);
  }

  getProductList(category: string) {
    return this.productList.filter(x => x.category == category);
  }

  getCategoryList(){
    return [...new Set(this.productList.map(item => item.category))];
  }

  postToServer(url:string,body:any):Observable<any>{
    return this.http.post(url,body)
  }

  getTopCategoryList(){
    return this.categoryList.filter(x => x.topCategory == true);
  }
}


