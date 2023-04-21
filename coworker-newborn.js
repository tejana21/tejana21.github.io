chinadata = [{
  "title": "Chinese Baby Clothes",
  "details": " Traditional Chinese baby clothes are a popular gift for new parents. Look for outfits with embroidered designs and soft, comfortable fabric."
},
{
  "title": "Baby Red Egg and Ginger Party Gift Set",
  "details": " A red egg and ginger party is a traditional Chinese celebration for newborns. A gift set with red eggs, ginger candies, and other traditional items is a thoughtful and culturally significant gift."
},
{
  "title": "Chinese Zodiac Baby Blanket",
  "details": " A baby blanket with the Chinese zodiac animal for the year the baby was born is a unique and meaningful gift."
},
{
  "title": "Chinese Lucky Charm Necklace",
  "details": " A necklace with a traditional Chinese lucky charm, such as a red string or jade pendant, is a symbolic gift for new parents."
},
{
  "title": "Chinese Baby Carrier",
  "details": " A traditional Chinese baby carrier, such as a mei tai or baby sling, can be a practical and culturally significant gift."
},
{
  "title": "Chinese Calligraphy Art",
  "details": " A piece of Chinese calligraphy art with a meaningful message, such as a blessing for the baby's future, is a thoughtful and decorative gift."
},
{
  "title": "Chinese Herbal Bath Bundle",
  "details": " A bundle of Chinese herbal bath products, such as ginger or ginseng bath salts, can help new parents relax and recover after childbirth."
},
{
  "title": "Chinese Character Blocks",
  "details": " Wooden blocks with Chinese characters can be a fun and educational gift for parents who want to teach their child Chinese."
},
{
  "title": "Chinese Tea Set",
  "details": " A Chinese tea set with traditional teapot and cups is a practical and cultural gift that can be enjoyed by the whole family."
},
{
  "title": "Chinese New Year Gift Basket",
  "details": " A gift basket filled with traditional Chinese New Year treats, such as pineapple cakes and dried fruits, can be a festive and tasty gift for new parents."
}];

indiandata = [{
  "title": "Silver Kada",
  "details": " A silver kada, or bangle, is a traditional gift for newborns in India. It is believed to bring good luck and protect the baby from evil spirits."
},
{
  "title": "Silver Spoon and Bowl Set",
  "details": " A silver spoon and bowl set is a classic gift for Indian parents with a newborn. It is often engraved with the baby's name and birth date."
},
{
  "title": "Baby Clothes with Indian Embroidery",
  "details": " Indian embroidery is known for its intricate designs and vibrant colors. A set of baby clothes with Indian embroidery is a beautiful and culturally significant gift."
},
{
  "title": "Indian Baby Massage Oil",
  "details": " Baby massage is an important part of Indian culture. A bottle of Indian baby massage oil, such as almond or coconut oil, is a practical and thoughtful gift."
},
{
  "title": "Ghungroo Anklets",
  "details": " Ghungroo anklets are traditional Indian jewelry with small bells attached. They are often worn by babies and are believed to soothe and entertain them."
},
{
  "title": "Silver Laxmi Ganesha Idol",
  "details": " Laxmi and Ganesha are two important deities in Indian culture. A silver idol of Laxmi and Ganesha is a symbolic and auspicious gift for new parents."
},
{
  "title": "Traditional Indian Toys",
  "details": " Traditional Indian toys, such as wooden rattles and handmade dolls, are a unique and nostalgic gift for new parents."
},
{
  "title": "Indian Sari for the Mother",
  "details": " A sari is a traditional Indian garment worn by women. A beautiful sari for the mother is a thoughtful and elegant gift."
},
{
  "title": "Indian Baby Carrier",
  "details": " A traditional Indian baby carrier, such as a ring sling or meh dai, is a practical and culturally significant gift for new parents."
},
{
  "title": "Indian Baby Naming Ceremony Kit",
  "details": " A naming ceremony is an important event in Indian culture. A kit with traditional items for the ceremony, such as a coconut, turmeric, and flowers, is a meaningful gift for new parents."
}];

function BuildLInkButton(url, text) {
  var button = document.createElement("div");
  button.innerHTML = text;
  button.classList.add("mdc-button");
  button.onclick = function(event) {
    window.open(url, '_blank');
  }
  return button;
}


function createShoppingBar(title) {
  var parentdiv = document.createElement("div");

  var amazonLinkUrl = "https://www.amazon.com/s?k=" + title + "&ref=nb_sb_noss_2";
  var googleLinkUrl = "https://www.google.com/search?tbm=shop&q=" + title + "&ref=nb_sb_noss_2";

  parentdiv.appendChild(BuildLInkButton(amazonLinkUrl, "Amazon"));
  parentdiv.appendChild(BuildLInkButton(googleLinkUrl, "Google"));
  return parentdiv;
}

function addGift(elem, title, content) {
	var el = document.createElement("span");
	el.classList.add("material-icons");
	el.innerHTML = "expand_more";
  el.classList.add("floatright");


	var titledetails = document.createElement("span");
	var el2 = document.createElement("span");
	el2.innerHTML = title;
	el2.classList.add("gifttitle");
	titledetails.appendChild(el2);

	var el3 = document.createElement("div");
	var el3_text = document.createElement("div");
	el3_text.classList.add("giftdetailstext");
	el3.appendChild(el3_text);
  el3.appendChild(createShoppingBar(title));
	el3_text.innerHTML = content;
	el3.classList.add("hiddenc");
	// el3.classList.add("mdc-card");
	el3.classList.add("tbmargin")
	el3.classList.add("giftdetails")


	titledetails.onclick = function(event) {
		if (el.innerHTML == "expand_more") {
			el.innerHTML = "expand_less";
			el3.classList.remove("hiddenc");
		} else {
			el.innerHTML = "expand_more";
			el3.classList.add("hiddenc");
		}
	}
	ee = document.createElement("div");
	ee.classList.add("topmargin");
	ee.classList.add("container");
	ee.classList.add("mdc-card");

	ee.appendChild(titledetails);
	titledetails.appendChild(el);
	titledetails.appendChild(el3);
	elem.appendChild(ee);
}



function culturepicked(v) {
	chinacontent = document.getElementById("chinacontent");
	chinacontent.classList.remove("hiddenc");
	if (!v) {
		v = "china";
	}
	addGifts(chinacontent, v);
	ddiv = document.getElementById('culturepickerdiv');
	if (ddiv) {
		ddiv.style.display = "none";
	}
}

var cultureinfo = {
  "china": chinadata,
  "india": indiandata,
  "other": {}
};

function addGifts(elem, culture) {
	var datatofill = cultureinfo[culture];
  if (!datatofill) {
    return;
  }
	for(var i = 0; i < datatofill.length; i++) {
		addGift(elem, datatofill[i].title, datatofill[i].details);		
	}
}

function getUrlParam(key) {
  var url = window.location.href;
  var index = url.indexOf(key);
  if (index == -1) {
    return null;
  }
  var value = url.substring(index + key.length + 1);
  var index2 = value.indexOf("&");
  if (index2 != -1) {
    value = value.substring(0, index2);
  }
  return value;
}

var select = null;
function onloadf() {
  var d = document.getElementById("culturepicker");
  select = new mdc.select.MDCSelect(d);
  select.listen('MDCSelect:change', () => {
    culturepicked(select.value);
  });
  var culture = getUrlParam("cultr");
  if(culture) {
    culturepicked(culture);
  }
}
