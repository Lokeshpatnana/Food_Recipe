function toitems(food){
    let foodId=document.getElementById('food')
    console.log(food)
    switch(food){
        case 'Rec':
            foodId.innerHTML=`      <div class="container text-center pt-3">
            <h2 class="text-warning bg-dark" id="main">Recommended</h2>
          </div>
          <fieldset>
          <div class="d-flex flex-row border border-dark">
            <div class="card  bg-dark bg-opacity-75 text-warning border border-dark" style="width: 20rem;">
                <img src="https://img.freepik.com/premium-photo/cheesy-shawarma-with-layers-chicken-meat_79762-2914.jpg?w=1060" class="card-img-top">
                <div class="card-body">
                  <h5 class="card-title text-light">Chicken Shawarma</h5>
                  <p class="card-text">Fresh rumali loaded with diced chicken& salad.Loaded with egg based garlic mayonnaise & with a touch of in house sauce.</p>
                  <h4 class="text-light">₹145/-</h4>
                  <a href="#" class="btn btn-outline-warning mr-2">Buy Now</a>
                  <a href="#" class="btn btn-outline-light">Add to Cart</a>
                </div>
              </div>
              <div class="card  bg-dark bg-opacity-75 text-warning border border-dark" style="width: 20rem;">
                <img src="https://img.freepik.com/free-photo/indian-chicken-biryani-served-terracotta-bowl-with-yogurt-white-background-selective-focus_466689-72554.jpg?w=1060&t=st=1663075379~exp=1663075979~hmac=2b66924397f3465f8fd37cab2282832103b665fc801091bf982511deadb3971e" class="card-img-top">
                <div class="card-body">
                  <h5 class="card-title text-light">Chicken Biryani</h5>
                  <p class="card-text">This biryani is inspired by the awadhi cuisine and comes with a Bengali touch.</p>
                  <h4 class="text-light">₹245/-</h4>
                  <a href="#" class="btn btn-outline-warning mr-2">Buy Now</a>
                  <a href="#" class="btn btn-outline-light">Add to Cart</a>
                </div>
              </div>
              <div class="card  bg-dark bg-opacity-75 text-warning border border-dark" style="width: 20rem;">
                <img src="https://img.freepik.com/free-photo/delicious-chicken-table_144627-8753.jpg?w=1060&t=st=1663078754~exp=1663079354~hmac=bf031ef2e3cda49ec59c7c1e57de11dbbbe2baadd92662447623cd6f69d4b6c8" class="card-img-top">
                <div class="card-body">
                  <h5 class="card-title text-light">Tandoori chicken</h5>
                  <p class="card-text">Tandoori chicken, a dish of roasted chicken marinated in yogurt and generously spiced,giving the meat its trademark red colour.It is named for the cylinderical clay oven in which it is cooked,a tandoor.</p>
                  <h4 class="text-light">₹530/-</h4>
                  <a href="#" class="btn btn-outline-warning mr-2">Buy Now</a>
                  <a href="#" class="btn btn-outline-light">Add to Cart</a>
                </div>
              </div>
              <div class="card  bg-dark bg-opacity-75 text-warning border border-dark" style="width: 20rem;">
                <img src="https://swatisani.net/kitchen/wp-content/uploads/2014/11/1200px-Chicken_65_Dish.jpg" class="card-img-top">
                <div class="card-body">
                  <h5 class="card-title text-light">Chicken 65</h5>
                  <p class="card-text">Chicken65 is a starter,prepared with deep-fried battered chicken cubes flavoured with red chillis,curry leaves and tossed in yogurt-based sauce.</p>
                  <h4 class="text-light">₹400/-</h4>
                  <a href="#" class="btn btn-outline-warning mr-2">Buy Now</a>
                  <a href="#" class="btn btn-outline-light">Add to Cart</a>
                </div>
              </div>
          </div>
        </fieldset>`
            break;
        case 'RB':
            foodId.innerHTML=`<div class="container text-center pt-3">
            <h2 class="text-warning bg-dark">Rice And Biryani's</h2>
          </div>
          <div class="d-flex flex-row border border-dark" id="rab">
            <div class="card bg-dark bg-opacity-75 text-warning" style="width: 18rem;">
              <img src="https://img.freepik.com/free-photo/chicken-fried-rice-is-popular-indian-chinese-indo-chinese-street-food-served-plate-with-chopsticks_466689-74601.jpg?w=1060&t=st=1663128138~exp=1663128738~hmac=f88ff5ec910ad421c6e08118fb0da8d8d91e981f592a20e241e5509e8894abb1" class="card-img-top">
              <div class="card-body">
                <h5 class="card-title text-light">Chicken Fried Rice</h5>
                <p class="card-text">Flavorful fried rice tossed with bits of succulent chicken, assorted fresh veggies and flavorful spices.|1Serve| |Dry| |Boneless| |Medium spicy|</p>
                <h4 class="text-light">₹180/-</h4>
                <a href="#" class="btn btn-outline-warning mr-2">Buy Now</a>
                <a href="#" class="btn btn-outline-light">Add to Cart</a>
              </div>
            </div>
            <div class="card bg-dark bg-opacity-75 text-warning" style="width: 18rem;">
              <img src="https://img.freepik.com/free-photo/schezwan-fried-rice-masala-szechuan-rice-is-popular-indo-chinese-food-served-plate-bowl-with-chopsticks-selective-focus_466689-74696.jpg?size=626&ext=jpg&ga=GA1.2.1837508588.1662649409" class="card-img-top">
              <div class="card-body">
                <h5 class="card-title text-light">Veg Fried Rice</h5>
                <p class="card-text">Flavorful fried rice tossed with assorted fresh veggies and flavorful spices served hot and fresh. | Mild Spicy|</p>
                <h4 class="text-light">₹170/-</h4>
                <a href="#" class="btn btn-outline-warning mr-2">Buy Now</a>
                <a href="#" class="btn btn-outline-light">Add to Cart</a>
              </div>
            </div>
            <div class="card bg-dark bg-opacity-75 text-warning" style="width: 18rem;">
              <img src="https://img.freepik.com/premium-photo/mutton-lamb-biriyani-with-basmati-rice-served-bowl-moody-background_466689-27226.jpg?w=1060" class="card-img-top">
              <div class="card-body">
                <h5 class="card-title text-light">Mutton Biryani</h5>
                <p class="card-text"><p>Traditional zafrani nizami style MUTTON dum biryani with finest marinated mutton meat served with salan and raita ,Moderate Spicy</p>
                <h4 class="text-light">₹285/-</h4>
                <a href="#" class="btn btn-outline-warning mr-2">Buy Now</a>
                <a href="#" class="btn btn-outline-light">Add to Cart</a>
              </div>
            </div>
            <div class="card bg-dark bg-opacity-75 text-warning" style="width: 18rem;">
              <img src="https://img.freepik.com/free-photo/yummy-soya-pulao-pilav-pulav-rice-soyabean-chunk-fried-rice-with-peas-beans-indian-pakistani-cuisine_466689-75121.jpg?w=1060&t=st=1663129122~exp=1663129722~hmac=6b956d1dba557473b2d1427988dde671eceb47ccdc1f068b25c24871b8cacc82" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title text-light">Veg Biryani</h5>
                <p class="card-text">A flavorful combination of rice and assorted veggies cooked in a fragrant and flavorful masala seasoned with Indian whole spices</p>
                <h4 class="text-light">₹170/-</h4>
                <a href="#" class="btn btn-outline-warning mr-2">Buy Now</a>
                <a href="#" class="btn btn-outline-light">Add to Cart</a>
              </div>
            </div>
          </div>`
            break;
        case 'Sts':
            foodId.innerHTML=`<div class="container text-center pt-3">
            <h2 class="text-warning bg-dark">Starters</h2>
          </div>
          <div class="d-flex flex-row border border-dark" id="stat">
            <div class="card bg-dark bg-opacity-75 text-warning" style="width: 18rem;">
              <img src="https://img.freepik.com/premium-photo/chilli-chicken-dry-is-popular-indo-chinese-dish-chicken-hakka-chinese-heritage_466689-77142.jpg?w=360" class="card-img-top" height="150px">
              <div class="card-body">
                <h5 class="card-title text-light">Chilli Chicken</h5>
                <p class="card-text">Chicken chunks, capsicum and onion tossed in a blend of chilli sauce, soya sauce and other Indo Chinese condiments.</p>
                <h4 class="text-light">₹199/-</h4>
                <a href="#" class="btn btn-outline-warning">Buy Now</a>
                <a href="#" class="btn btn-outline-light">Add to Cart</a>
              </div>
            </div>
            <div class="card bg-dark bg-opacity-75 text-warning" style="width: 18rem;">
              <img src="https://img.freepik.com/premium-photo/chilli-paneer-dry-is-made-using-cottage-cheese-indo-chinese-food_466689-76873.jpg?size=626&ext=jpg&ga=GA1.2.1837508588.1662649409" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title text-light">Chilli Paneer</h5>
                <p class="card-text">Cubes of fried crispy paneer are tossed in a spicy sauce made with soy sauce, vinegar, chili sauc</p>
                <h4 class="text-light">₹180/-</h4>
                <a href="#" class="btn btn-outline-warning">Buy Now</a>
                <a href="#" class="btn btn-outline-light">Add to Cart</a>
              </div>
            </div>
            <div class="card bg-dark bg-opacity-75 text-warning" style="width: 18rem;">
              <img src="https://img.freepik.com/premium-photo/veg-manchurian_57665-14110.jpg?size=626&ext=jpg&ga=GA1.2.1837508588.1662649409" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title text-light">Veg Manchurian</h5>
                <p class="card-text">Fried mixed vegetable dumplings tossed in tangy chilli sauce with added flavours of soy and vinegar</p>
                <h4 class="text-light">₹170/-</h4>
                <a href="#" class="btn btn-outline-warning">Buy Now</a>
                <a href="#" class="btn btn-outline-light">Add to Cart</a>
              </div>
            </div>
            <div class="card bg-dark bg-opacity-75 text-warning" style="width: 18rem;">
              <img src="https://img.freepik.com/premium-photo/indian-starter-chilli-chicken-served-plate-selective-focus_466689-32019.jpg?w=360" class="card-img-top" alt="..." height="150px">
              <div class="card-body">
                <h5 class="card-title text-light">Chicken Manchurian</h5>
                <p class="card-text">Fried mixed vegetable dumplings tossed in tangy chilli sauce with added flavours of soy and vinegar</p>
                <h4 class="text-light">₹188/-</h4>
                <a href="#" class="btn btn-outline-warning">Buy Now</a>
                <a href="#" class="btn btn-outline-light">Add to Cart</a>
              </div>
            </div>
          </div>`
            break;
        case 'kbs':
            foodId.innerHTML=`<div class="container text-center pt-3">
            <h2 class="text-warning bg-dark">Kebabs</h2>
          </div>
          <div class="d-flex flex-row border border-dark" id="KBS">
            <div class="card bg-dark bg-opacity-75 text-warning" style="width: 18rem;">
              <img src="https://img.freepik.com/premium-photo/paneer-tikka-kabab-red-sauce-is-indian-dish-made-from-chunks-cottage-cheese_466689-67071.jpg?size=626&ext=jpg&ga=GA1.2.1837508588.1662649409" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title text-light">Paneer Tikka Kebab</h5>
                <p class="card-text">Cottage cheese cubes marinated with Indian spices and cooked to perfection in a tandoor with onion and capsicum.</p>
                <h4 class="text-light">₹188/-</h4>
                <a href="#" class="btn btn-outline-warning">Buy Now</a>
                <a href="#" class="btn btn-outline-light">Add to Cart</a>
              </div>
            </div>
            <div class="card bg-dark bg-opacity-75 text-warning" style="width: 18rem;">
              <img src="https://images.unsplash.com/photo-1532636875304-0c89119d9b4d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGtlYmFic3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title text-light">Chicken tikka Kebab</h5>
                <p class="card-text">Juicy and tender chicken pieces cooked in tandoor ,Serves with Green Chutney ,Mild Spicy</p>
                <h4 class="text-light">₹188/-</h4>
                <a href="#" class="btn btn-outline-warning">Buy Now</a>
                <a href="#" class="btn btn-outline-light">Add to Cart</a>
              </div>
            </div>
            <div class="card bg-dark bg-opacity-75 text-warning" style="width: 18rem;">
              <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/qhhzmvxf3jxack8tfl3c" height="170px" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title text-light">Tandoori Kebab</h5>
                <p class="card-text">Raw chicken marinated with a mixture of yogurt and tandoori masala, a spice blend, seasoned and colored with cayenne pepper.</p>
                <h4 class="text-light">₹188/-</h4>
                <a href="#" class="btn btn-outline-warning">Buy Now</a>
                <a href="#" class="btn btn-outline-light">Add to Cart</a>
              </div>
            </div>
            <div class="card bg-dark bg-opacity-75 text-warning" style="width: 18rem;">
              <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/itbdb4krzbkzextn6iwy" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title text-light">Tangdi Kebab</h5>
                <p class="card-text">A marinade of garlic, ginger, garam masala, turmeric and chilli gives chicken drumsticks a dose of sub-continental spice in Alfred Prasad's tangdi kabab recipe.</p>
                <h4 class="text-light">₹188/-</h4>
                <a href="#" class="btn btn-outline-warning">Buy Now</a>
                <a href="#" class="btn btn-outline-light">Add to Cart</a>
              </div>
            </div>
          </div>`
            break;
        default:
            foodId.innerHTML=`<div class="container text-center pt-3">
            <h2 class="text-warning bg-dark">Soups and Shawarma</h2>
          </div>
          <div class="d-flex flex-row border border-dark" id="SAS">
            <div class="card bg-dark bg-opacity-75 text-warning" style="width: 18rem;">
              <img src="https://recipesofhome.com/wp-content/uploads/2020/03/vegetable-soup-recipe.jpg" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title text-light">Veg Soup</h5>
                <p class="card-text">A clear soup flavoured with chinese seasonings and served with boiled noodles, could be enjoyed best with veggies.</p>
                <h4 class="text-light">₹160/-</h4>
                <a href="#" class="btn btn-outline-warning">Buy Now</a>
                <a href="#" class="btn btn-outline-light">Add to Cart</a>
              </div>
            </div>
            <div class="card bg-dark bg-opacity-75 text-warning" style="width: 18rem;">
              <img src="https://images.unsplash.com/photo-1534939561126-855b8675edd7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fHNvdXBzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" class="card-img-top" alt="..." height="170px">
              <div class="card-body">
                <h5 class="card-title text-light">Chicken Soup</h5>
                <p class="card-text">Shredded chicken cooked in spicy brown broth accented by fried bits of garlic and topped with crunchy noodles.</p>
                <h4 class="text-light">₹180/-</h4>
                <a href="#" class="btn btn-outline-warning">Buy Now</a>
                <a href="#" class="btn btn-outline-light">Add to Cart</a>
              </div>
            </div>
            <div class="card bg-dark bg-opacity-75 text-warning" style="width: 18rem;">
              <img src="https://img.freepik.com/free-photo/side-view-chicken-roll-grilled-chicken-lettuce-cucumber-tomato-mayo-pita_141793-4849.jpg?size=626&ext=jpg&ga=GA1.2.1837508588.1662649409" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title text-light">Chicken Shawarma without salad</h5>
                <p class="card-text">Marinated double grilled shredded boneless chicken (halal) wrapped in rumali roti, salad and an irresistible mix of mint, garlic mayo and spicy tahini sauce.</p>
                <h4 class="text-light">₹145/-</h4>
                <a href="#" class="btn btn-outline-warning">Buy Now</a>
                <a href="#" class="btn btn-outline-light">Add to Cart</a>
              </div>
            </div>
            <div class="card bg-dark bg-opacity-75 text-warning" style="width: 18rem;">
              <img src="https://img.freepik.com/free-photo/tortilla-with-added-ink-cuttlefish-with-chicken-vegetables_2829-10963.jpg?size=626&ext=jpg&ga=GA1.2.1837508588.1662649409" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title text-light">Chicken Shawarma with salad</h5>
                <p class="card-text">Marinated double grilled shredded boneless chicken (halal) wrapped in rumali roti, salad and an irresistible mix of mint, garlic mayo and spicy tahini sauce.</p>
                <h4 class="text-light">₹130/-</h4>
                <a href="#" class="btn btn-outline-warning">Buy Now</a>
                <a href="#" class="btn btn-outline-light">Add to Cart</a>
              </div>
            </div>
          </div>`
    }
}