



const num1 = document.getElementById('pt');
const num2 = document.getElementById('ps');
const carter = document.getElementById('cartno');
const ocsc = document.getElementById('oc');

// const res = document.getElementById('result');

// function addNumber(){

// 	var pe = num1.innerHTML ;
	
	
// 	res.innerHTML = pe;
// 	if(num1.innerHTML){
		
// 		res.innerHTML = pe;
// 	}
// 	else{
// 		let re2 = pe += num2.innerHTML ;
// 		res.innerHTML = re2;
// 	}
// }
// const num1 =document.getElementById('pt');
// const res = document.getElementById('result');
// const oc = document.getElementById('ps');


// const pllus = document.getElementById('phus');
// const minuus = document.getElementById('minus');



// var pt = num1.innerHTML;
// var ps = oc.textContent;


result = 0;
	document.getElementById('result').innerText = '$'+0+'.00';
function addNumber(){
	results = result + num1;
	document.getElementById('result').innerText = '$'+results+'.00';


	// document.getElementById('cartno').innerHTML=st.length;
	// res.innerHTML = num1.innerHTML; 
	// res.innerHTML = num1.innerHTML;

	// res.innerHTML = num1.innerHTML+oc.innerHTML;
	// res.innerHTML += parseInt(oc).value;
	// res.value = res.value + oc.value;


	// var c = num1.innerHTML + oc.innerText;
	// res.innerHTML = c;

}


// pllus.addEventListener('click', function(){
// 	var e = res.textText;
// 	var er = e+234;

// 	// var g = f + 1;
// 	console.log(er)
// 	// res.textContent = g;
// })
















// const tt = document.getElementById('tr1');
// const tr = document.getElementById('tr2');
// const td = document.getElementById('tr3');
// const ts = document.getElementById('tr4');



// const fader = (images, timer, current = 0)=>{
// 	const total = images.length;



	
	

// 	let tr2 = setTimeout(trr,2000);
// 	let tr7 = setTimeout(tt, 4000);
// 	let tr8 = setTimeout(ttr, 6000);







// function trr(){
		

// 		document.getElementById('tr1').style.display = 'none';
//         document.getElementById('tr2').style.display = 'block';
	

// 	       }




	 
// function tt(){
//         document.getElementById('tr2').style.display = 'none';
//         document.getElementById('tr3').style.display = 'block';


// }


// function ttr(){
//         document.getElementById('tr3').style.display = 'none';
//         document.getElementById('tr4').style.display = 'block';


// }


// const n8 =  document.getElementById('tr1');
// const na =  document.getElementById('tr2');
// const nt =  document.getElementById('tr3');
// const nu =  document.getElementById('tr4');



// const m1 =  document.getElementById('p1');
// const m2 =  document.getElementById('p2');
// const m3 =  document.getElementById('p3');
// const m4 =  document.getElementById('p4');
		


// m1.addEventListener('click', function(){
// 	n8.style.display = 'block';
// 	na.style.display = 'none';
// 	nt.style.display = 'none';
// 	nu.style.display = 'none';
// })




















const pr = document.getElementById('pre');
const ne = document.getElementById('nex');
const bd = document.getElementById('body');
const bod = document.getElementById('body2');
// const sr1 = document.getElementById('scr1');
// const sr2 = document.getElementById('scr2');
// const sr3 = document.getElementById('scr3');
// const sr4 = document.getElementById('scr4');
// const sr5 = document.getElementById('scr5');






	ne.addEventListener('click', function(){
		bd.style.display = 'none';
		bod.style.display = 'flex';
	})

	pr.addEventListener('click', function(){
		bod.style.display = 'none';
		bd.style.display = 'flex';
			})
	





















	// copy meny for mobile

function copyMenu(){

// copy inside .dpt-cat to department

	var dptCategory = document.querySelector('.dpt-cat');
	var dptPlace = document.querySelector('.departments');
	dptPlace.innerHTML = dptCategory.innerHTML;



	// copy inside nav to nav

	var mainNav = document.querySelector('.header-now nav');
	var navPlace = document.querySelector('.off-canvas nav');
	navPlace.innerHTML = mainNav.innerHTML;


	// copy header-top .wrapper to .thetop-nav

	var topNav = document.querySelector('.header-now .wrapper');
	var topPlace = document.querySelector('.off-canvas .thetop-nav');
	topPlace.innerHTML = topNav.innerHTML;



}
copyMenu();

// show mobile menu

const menuButton = document.querySelector('.trigger'),
      closeButton = document.querySelector('.t-close'),
      addclass  = document.querySelector('.site');


menuButton.addEventListener('click', function() {
	addclass.classList.toggle('showmenu')

})

closeButton.addEventListener('click', function() {
	addclass.classList.toggle('remove')

})



function myFunction(){
	const zzz = document.getElementById('xxx');
	const bbb = document.getElementById('ddd');
	const element = document.getElementById('hidee');
	const ttt = document.getElementById('qqq');
	const yyy = document.getElementById('ppp');

	element.classList.remove('side-off');
	// element.classList.style = 'background-color: red';
	bbb.style.display = 'none';
	zzz.style.display = 'none';
	qqq.style.display = 'none';
	yyy.style.display = 'none';

}

function myShow(){
	const zzz = document.getElementById('xxx');
	const bbb = document.getElementById('ddd');
	const elements = document.getElementById('hidee');
	const www = document.getElementById('qqq');
	const dd = document.getElementById('ppp');


	elements.classList.add('side-off');
	bbb.style.display = 'block';
	zzz.style.display = 'flex';
	www.style.display = 'block';
	dd.style.display = 'block';
}


function showoff(){
	const btn = document.getElementById('show');
	btn.classList.remove('dpt-menu');


	const ttt = document.getElementById('menu');
	ttt.style.width = '-2rem';

}



// const wash = document.getElementById('wash');
// const feat = document.getElementById('feature');
// const des = document.getElementById('desc');
// const per = document.getElementById('pera');

// wash.addEventListener('click', function(){
// 	feat.style.display = 'block';
// 	per.style.display = 'none';

// })

// des.addEventListener('click',function(){
// 	per.style.display = 'block';
// 	feat.style.display = 'none';
// })



const washhh = document.getElementById('washh');
const feattt = document.getElementById('featuree');
const desss = document.getElementById('descc');
const perrr = document.getElementById('peraa');

washhh.addEventListener('click', function(){
	feattt.style.display = 'block';
	perrr.style.display = 'none';

})

desss.addEventListener('click',function(){
	perrr.style.display = 'block';
	feattt.style.display = 'none';
})


const sss = document.getElementById('aaa');
const a = document.getElementById('ooo');
const ddd = document.getElementById('ppp');



sss.addEventListener('click', function(){
	a.style.display = 'block';
	ddd.style.display = 'none';
})




const plus = document.querySelector('.phus'),
	  minus = document.querySelector('.myNumber'),
	  num = document.querySelector('.minus');

// for(var i = 0; i < plus.length; i++){
// 	var button = plus[i];
// 	button.addEventListener('click', function(e){
// 		var buttonClicked = e.target;
// 		console.log(buttonClicked);
// 	})
// }

      let ca = 1;

      plus.addEventListener('click', ()=>{
      	ca++;
      	ca = (ca < 10) ? '0' + ca : ca;
      	minus.innerText = ca;
      	console.log('ca');
      });


      minus.addEventListener('click', ()=>{
      if(ca>1){
      	ca--;
      	ca = (ca < 10) ? '0' + ca : ca;
      	minus.innerText = ca;
      }
      });


// const searchButoon = document.querySelector('.t-search'),
// 	  tClose = document.querySelector('.search-close'),
// 	  showClass = document.querySelector('.site');

// searchButoon.addEventListener('click', function(){
// 	showClass.classList.toggle('showsearch')
// })
// tClose.addEventListener('click', function(){
// 	showClass.classList.remove('showsearch')
// })


const qwew = document.getElementById('t-search');
const nmn = document.getElementById('qwe');
      
	qwew.addEventListener('click', function(){
		nmn.style.display = 'block';
	})


// const fff = document.getElementById('qpqp');
// const ggg = document.getElementById('searchh');
// const oreos = document.getElementById('oreo');



// fff.addEventListener('click', function(){
// 	ggg.style.display = 'flex';
// })
	
function searc(){
	if(ggg = document.getElementById('searchh'));{
	ggg.style.display = 'flex';}


	

}

const xxx = document.getElementById('xx');
const fff = document.getElementById('form');
const backs = document.getElementById('back');


xxx.addEventListener('click', function(){
	fff.style.display = 'block';
})

backs.addEventListener('click', function(){
	fff.style.display = 'none';
})



	const cart = document.getElementById('cartt');
	const ccc = document.getElementById('cart-t');
	const backss = document.getElementById('bbb');
	const non = document.getElementById('none');

	cart.addEventListener('click', function(){
		ccc.style.display ='block';
		non.style.display = 'none';

	})

	backss.addEventListener('click', function(){
		ccc.style.display = 'none';
	})









const ssss = document.getElementById('hh');
const dsd = document.getElementById('sll');
const ffff = document.getElementById('eww');
const sas = document.getElementById('h5');
const linee = document.getElementById('line');
const linees = document.getElementById('lines');



ssss.addEventListener('click', function(){
	dsd.style.display = 'none';
	ffff.style.display = 'block';
	linees.style.display = 'none';

})

sas.addEventListener('click', function(){
	ffff.style.display = 'none';
	dsd.style.display = 'block';
	linees.style.display = 'flex';
})





// const backkk = document.getElementById('backk');
// const vv = document.getElementById('class');
// const c = document.getElementById('item');
// const s = document.getElementById('ppp');
// const cd = document.getElementById('xxx');




// backkk.addEventListener('click', function(){
// 	vv.style.display = 'none';
// 	s.style.display = 'block';
// })

// c.addEventListener('click', function(){
// 	vv.style.display = 'block';
// 	// s.style.display = 'none';
// 	cd.style = 'z-index: 400';
// })


const backk = document.getElementById('backkk');
const vvc = document.getElementById('lass');
const cv = document.getElementById('itemm');
const sv = document.getElementById('ppp');



backk.addEventListener('click', function(){
	vvc.style.display = 'none';
	sv.style.display = 'block';
})

cv.addEventListener('click', function(){
	vvc.style.display = 'block';
	sv.style.display = 'block';
})






// const m = document.getElementById('more');
// const n = document.getElementById('line');
// const er = document.getElementById('ul');
// const y = document.getElementById('less');


// m.addEventListener('click', function(){
// 	// er.style.display = 'flex';
// 	er.style.display = 'block';
// 	y.style.display = 'block';
// 	m.style.display = 'none';
// 	// er.style = 'margin-top: -1.7em'; 

// })

// y.addEventListener('click', function(){
// 	y.style.display = 'none';
// 	er.style.display = 'none';
// 	m.style.display = 'block';

// })



const mo = document.getElementById('moree');
const no = document.getElementById('line');
const ero = document.getElementById('ulll');
const yo = document.getElementById('lesss');

mo.addEventListener('click', function(){
	// er.style.display = 'flex';
	ero.style.display = 'block';
	yo.style.display = 'block';
	mo.style.display = 'none';
	// er.style = 'margin-top: -1.7em'; 

})

yo.addEventListener('click', function(){
	yo.style.display = 'none';
	ero.style.display = 'none';
	mo.style.display = 'block';

})



const nm = document.getElementById('nnn');
nm.addEventListener('click', function(){
	nm.style.background = 'rgb(242, 156, 143)';
	nnnm.style.background = 'none';
	gf.style.background = 'none';
	xz.style.background = 'none';
	bf.style.background = 'none';
	ew.style.background = 'none';
	cx.style.background = 'none';
	cz.style.background = 'none';
	dd.style.background = 'none';
})


const nnnm = document.getElementById('nnnn');

nnnm.addEventListener('click', function(){
	nnnm.style.background = 'rgb(242, 156, 143';
	nm.style.background = 'none';
	gf.style.background = 'none';
	bf.style.background = 'none';
	cx.style.background = 'none';
	ds.style.background = 'none';
	xz.style.background = 'none';
	ew.style.background = 'none';
	cz.style.background = 'none';
	dd.style.background = 'none';
})

const gf = document.getElementById('nnnnnn');

gf.addEventListener('click', function(){
	gf.style.background = 'rgb(242, 156, 143';
	nm.style.background = 'none';
	nnnm.style.background = 'none';
	bf.style.background = 'none';
	cz.style.background = 'none';
	ds.style.background = 'none';
	ew.style.background = 'none';
	xz.style.background = 'none';
	cx.style.background = 'none';
	dd.style.background = 'none';

})

const bf = document.getElementById('nnnnn');

bf.addEventListener('click', function(){
	bf.style.background = 'rgb(242, 156, 143';
	nm.style.background = 'none';
	nnnm.style.background = 'none';
	gf.style.background = 'none';
	ds.style.background = 'none';
	cz.style.background = 'none';
	ew.style.background = 'none';
	xz.style.background = 'none';
	dd.style.background = 'none';
	cx.style.background = 'none';
})

const ds = document.getElementById('nnnnnnn');

ds.addEventListener('click', function(){
	ds.style.background = 'rgb(242, 156, 143';
	nm.style.background = 'none';
	nnnm.style.background = 'none';
	bf.style.background = 'none';
	gf.style.background = 'none';
	xz.style.background = 'none';
	cx.style.background = 'none';
	cz.style.background = 'none';
	ew.style.background = 'none';
	dd.style.background = 'none';
})

const ew = document.getElementById('nnnnnnnn');

ew.addEventListener('click', function(){
	ew.style.background = 'rgb(242, 156, 143';
	ds.style.background = 'none';
	nm.style.background = 'none';
	nnnm.style.background = 'none';
	xz.style.background = 'none';
	bf.style.background = 'none';
	cz.style.background = 'none';
	gf.style.background = 'none';
	dd.style.background = 'none';
	cx.style.background = 'none';

})

const dd = document.getElementById('nnnnnnnnn');

dd.addEventListener('click', function(){
	dd.style.background = 'rgb(242, 156, 143';
	ds.style.background = 'none';
	nm.style.background = 'none';
	ew.style.background = 'none';
	nnnm.style.background = 'none';
	xz.style.background = 'none';
	bf.style.background = 'none';
	gf.style.background = 'none';
	cx.style.background = 'none';
	cz.style.background = 'none';

})


cx = document.getElementById('nnnnnnnnnn');

cx.addEventListener('click', function(){
	cx.style.background = 'rgb(242, 156, 143';
	dd.style.background = 'none';
	ds.style.background = 'none';
	nm.style.background = 'none';
	nnnm.style.background = 'none';
	ew.style.background = 'none';
	bf.style.background = 'none';
	xz.style.background = 'none';
	gf.style.background = 'none';
	cz.style.background = 'none';
})


xz = document.getElementById('nnnnnnnnnnn');

xz.addEventListener('click', function(){
	xz.style.background = 'rgb(242, 156, 143';
	dd.style.background = 'none';
	ds.style.background = 'none';
	nm.style.background = 'none';
	nnnm.style.background = 'none';
	ew.style.background = 'none';
	bf.style.background = 'none';
	gf.style.background = 'none';
	cx.style.background = 'none';
	cz.style.background = 'none';
})


cz = document.getElementById('nnnnnnnnnnnn');

cz.addEventListener('click', function(){
	cz.style.background = 'rgb(242, 156, 143';
	dd.style.background = 'none';
	ds.style.background = 'none';
	nm.style.background = 'none';
	nnnm.style.background = 'none';
	ew.style.background = 'none';
	bf.style.background = 'none';
	gf.style.background = 'none';
	cx.style.background = 'none';
	xz.style.background = 'none';

})




 const scriptURL = 'https://script.google.com/macros/s/AKfycbyQO2uvko3Jx1APDb7HwRVY0M_wMF90cAdw3TyOcafvuwufLVjXsfSDtkZkBPVGjtT0qw/exec'
            const form = document.forms['google-sheet']
          
            form.addEventListener('submit', e => {
              e.preventDefault()
              fetch(scriptURL, { method: 'POST', body: new FormData(form)})
                .then(response => alert("Thanks for Contacting us..! We Will Contact You Soon..."))
                .catch(error => console.error('Error!', error.message))
            })







// Show submenu on mobile

const submenu = document.querySelectorAll('.has-child .icon-small');
submenu.forEach((menu) => menu.addEventListener('click', toggle));


function toggle(){
	
	submenu.forEach((item)=> item != this ? item.closest('.has-child').classList.remove('expand') : null);
	if(this.closest('.has-child').classList != 'expand');
	this.closest('.has-child').classList.toggle('expand')
}






// const btn1 = document.getElementById('btn');
// const add = document.getElementById('li');
// const coo = document.getElementById('co');

// btn.addEventListener('click', function(e){
// 	e.preventDefault();
// 	btn.remove(coo);

// add.appendChild(coo);

// })


// const oo = document.getElementById('btn');
// // const rq = document.getElementById('rq');
// const name = document.getElementById('p');

// const price = document.getElementById('pr');
// const add = document.getElementById('li');

// const addName = document.getElementById('na');
// const addPrice = document.getElementById('pt');

// const imggg = document.getElementById('img');
// const image = document.getElementById('imgg');


// const show = document.getElementById('showoff');


// const st = document.getElementById('ss');



// // oo.addEventListener('click', function(e){

// // 	e.preventDefault();
// // 	name.remove('name');


// // 	add.appendChild('add');
	


// // })
//  lll = 0;



// oo.addEventListener('click', function(e){
// 	e.preventDefault();

// 	document.getElementById('cartno').innerHTML=st.length;
// 	 document.getElementById('ss').style.visibility = 'visible';
// 	imggg.src = image.src;
// 	image.alt = image.alt;
// 	show.style.display = 'none';
// 	add.style.display = 'flex';
// 	// imggg.innerHTML = duplicateImage.innerHTML

// 	// image.innerHTML;
// 	// imggg.appendChild('image');
	
// 	addName.innerHTML = name.innerHTML

// 	imggg.innerHTML = image.innerHTML

// 	addPrice.innerHTML = price.innerHTML
// 	// imggg.remove('imggg');
// 	// imggg.add('image');



// 	// add.innerHTML.append('add');
	
// })


// const ooo = document.getElementById('btnn');
// const namee = document.getElementById('pp');

// const pricee = document.getElementById('pre');
// const addd = document.getElementById('lu');

// const addNamee = document.getElementById('ns');
// const addPricee = document.getElementById('ps');

// const addimage = document.getElementById('imag');
// const imageE = document.getElementById('image');

// const l = document.getElementById('li');

// const showfff = document.getElementById('showoff');




// ooo.addEventListener('click', function(){
// 	 document.getElementById('ss').style.visibility = 'visible';
// 	addd.style.display = 'flex';
// 	// l.style.display = 'none';
// 	showfff.style.display = 'none';
// 	addNamee.innerHTML = namee.innerHTML;
// 	addPricee.innerHTML = pricee.innerHTML;
// 	addimage.src = imageE.src;
// 	// addimage.alt = imageE.alt;

// })






const swiper = new Swiper('.swiper', {
  // Optional parameters
 
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  

  // And if we need scrollbar
 
});





// const addCart = document.getElementById('f2');
// const sllkl = document.getElementById('sll');
// // const caart = document.getElementById('ss');
// const sec = document.getElementById('lilu');
// const img = document.getElementById('im');
// const ass = document.getElementById('as');
// const occ = document.getElementById('oc');
// const headd = document.getElementById('head');
// const priceee = document.getElementById('price');
// const g55 = document.getElementById('g5');
// const showofff = document.getElementById('showoff');
// const li = document.getElementById('li');



// addCart.addEventListener('click', function(){
// 	document.getElementById('ss').style.visibility = 'visible';
// 	sllkl.style.display = 'block';
//     // caart.style.display = 'block';
//     sec.style.display = 'flex';
//     li.style.display = 'none';
//     showofff.style.display = 'none';
//     im.src = g55.src;
//     im.alt = g55.alt;
//     ass.innerHTML = headd.innerHTML;
//     occ.innerHTML = priceee.innerHTML;
// });










// let slideIndex = 1;
// showSlides(slideIndex);

// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// function showSlides(n) {
//   let i;
//   let slides = document.getElementsByClassName("mySlides");
//   let dots = document.getElementsByClassName("dot");
//   if (n > slides.length) {slideIndex = 1}    
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";  
//   }
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "block";  
//   dots[slideIndex-1].className += " active";
// }





// let slideX = 1;
// showSlides(slideX);

// function plusSlides(n) {
//   showSlides(slideX += n);
// }

// function currentSlide(n) {
//   showSlides(slideX = n);
// }

// function showSlides(n) {
//   let i;
//   let slide = document.getElementsByClassName("mySlides");
//   let dot = document.getElementsByClassName("demo");
//   let captionText = document.getElementById("caption");
//   if (n > slide.length) {slideX = 1}
//   if (n < 1) {slideX = slide.length}
//   for (i = 0; i < slide.length; i++) {
//     slide[i].style.display = "none";
//   }
//   for (i = 0; i < dot.length; i++) {
//     dot[i].className = dot[i].className.replace(" active", "");
//   }
//   slide[slideX-1].style.display = "block";
//   dot[slideX-1].className += " active";
//   captionText.innerHTML = dot[slideX-1].alt;
// }




























// 'use strict';

// angular.module('richCarousel', [])
//   .controller('MainCtrl', ['$scope', '$document', function($scope, $document) {
//     // Set of Photos
//     $scope.photos = [
//       { src: 'https://source.unsplash.com/800x500?girl', desc: 'Image 01' },
//       { src: 'https://source.unsplash.com/800x500?rose', desc: 'Image 02' },
//       { src: 'https://source.unsplash.com/800x500?evening', desc: 'Image 03' },
//       { src: 'https://source.unsplash.com/800x500?garden', desc: 'Image 04' },
//       { src: 'https://source.unsplash.com/800x500?sunset', desc: 'Image 05' },
//       { src: 'https://source.unsplash.com/800x500?sunrise', desc: 'Image 06' },
//       { src: 'https://source.unsplash.com/800x500?natural', desc: 'Image 07' },
//       { src: 'https://source.unsplash.com/800x500?forest', desc: 'Image 8' }
//     ];

//     // initial image index
//     $scope._Index = 0;

//     // if a current image is the same as the requested image
//     $scope.isActive = function(index) {
//       return $scope._Index === index;
//     };

//     // show prev image
//     $scope.showPrev = function() {
//       $scope._Index = ($scope._Index > 0) ? --$scope._Index : $scope.photos.length - 1;
//     };

//     // show next image
//     $scope.showNext = function() {
//       $scope._Index = ($scope._Index < $scope.photos.length - 1) ? ++$scope._Index : 0;
//     };
//     // show a certain image on thumbnail click
//     $scope.showPhoto = function(index) {
//       $scope._Index = index;
//     };
//     // Keyboard navigation support
//     $document.on('keydown', function(event) {
//       $scope.$apply(function() {
//         switch (event.keyCode) {
//           case 37: // Left arrow key
//             $scope.showPrev();
//             break;
//           case 39: // Right arrow key
//             $scope.showNext();
//             break;
//           default:
//             return; // Exit function if other keys are pressed
//         }
//       });
//     });
//   }]);























  // (function() {
  // $(document).ready(function() {
  //   var walkthrough;
  //   walkthrough = {
  //     index: 0,
  //     nextScreen: function() {
  //       if (this.index < this.indexMax()) {
  //         this.index++;
  //         return this.updateScreen();
  //       }
  //     },
//       prevScreen: function() {
//         if (this.index > 0) {
//           this.index--;
//           return this.updateScreen();
//         }
//       },
//       updateScreen: function() {
//         this.reset();
//         this.goTo(this.index);
//         return this.setBtns();
//       },
//       setBtns: function() {
//         var $lastBtn, $nextBtn, $prevBtn;
//         $nextBtn = $('.next-screen');
//         $prevBtn = $('.prev-screen');
//         $lastBtn = $('.finish');
//         if (walkthrough.index === walkthrough.indexMax()) {
//           $nextBtn.prop('disabled', true);
//           $prevBtn.prop('disabled', false);
//           return $lastBtn.addClass('active').prop('disabled', false);
//         } else if (walkthrough.index === 0) {
//           $nextBtn.prop('disabled', false);
//           $prevBtn.prop('disabled', true);
//           return $lastBtn.removeClass('active').prop('disabled', true);
//         } else {
//           $nextBtn.prop('disabled', false);
//           $prevBtn.prop('disabled', false);
//           return $lastBtn.removeClass('active').prop('disabled', true);
//         }
//       },
//       goTo: function(index) {
//         $('.screen').eq(index).addClass('active');
//         return $('.dot').eq(index).addClass('active');
//       },
//       reset: function() {
//         return $('.screen, .dot').removeClass('active');
//       },
//       indexMax: function() {
//         return $('.screen').length - 1;
//       },
//       closeModal: function() {
//         $('.walkthrough, .shade').removeClass('reveal');
//         return setTimeout((() => {
//           $('.walkthrough, .shade').removeClass('show');
//           this.index = 0;
//           return this.updateScreen();
//         }), 200);
//       },
//       openModal: function() {
//         $('.walkthrough, .shade').addClass('show');
//         setTimeout((() => {
//           return $('.walkthrough, .shade').addClass('reveal');
//         }), 200);
//         return this.updateScreen();
//       }
//     };
//     $('.next-screen').click(function() {
//       return walkthrough.nextScreen();
//     });
//     $('.prev-screen').click(function() {
//       return walkthrough.prevScreen();
//     });
//     $('.close').click(function() {
//       return walkthrough.closeModal();
//     });
//     $('.open-walkthrough').click(function() {
//       return walkthrough.openModal();
//     });
//     walkthrough.openModal();
    
//     // Optionally use arrow keys to navigate walkthrough
//     return $(document).keydown(function(e) {
//       switch (e.which) {
//         case 37:
//           // left
//           walkthrough.prevScreen();
//           break;
//         case 38:
//           // up
//           walkthrough.openModal();
//           break;
//         case 39:
//           // right
//           walkthrough.nextScreen();
//           break;
//         case 40:
//           // down
//           walkthrough.closeModal();
//           break;
//         default:
//           return;
//       }
//       e.preventDefault();
//     });
//   });

// }).call(this);














var myVar;

function myfunction() {
  myVar = setTimeout(showPage, 3000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("ddd").style.display = "block";
}









const bac = document.getElementById('ooo');
const bb = document.getElementById('bak');
const pp = document.getElementById('ppp');

bb.addEventListener('click', function(){
	bac.style.display = 'none';
	pp.style.display = 'block';
})




const ree = document.getElementById('re');
const eww = document.getElementById('bb');
const fr = document.getElementById('tt');


fr.addEventListener('click', function(){
	ree.style.display = 'block';
})

eww.addEventListener('click', function(){
	ree.style.display = 'none';
})































// const addCartt = document.getElementById('btnn');
// const df = document.getElementById('ns');
// const dc = document.getElementById('ps');
// const fd = document.getElementById('imag');


// const lie = document.getElementById('li');
// const pre = document.getElementById('pre');
// const na = document.getElementById('lii');

 

// addCartt.addEventListener('click', function(e){
// 	// e.preventDefault();
// 			na.style.display = 'flex';
// 		  df.innerHTML = document.getElementById('pp').innerHTML ;
// 		  dc.innerHTML = document.getElementById('pre').innerHTML ;
// 		  fd.src = document.getElementById('image').src ;
// 		  fd.alt = document.getElementById('image').alt ;
// 		  // document.getElementById('li')++;
// // lie.style.display = 'none';

// if (na.style.display = 'flex') {
// 	lie.style.display = 'none'
// }else{
// 	lie.style.display= 'visible';
// }
		  
// })












const addtoCart = document.querySelector('.button');

const item = document.querySelector('.itemm');

addtoCart.onclick = () =>{
	item.classList.add('active');
}























const itemmm  =document.getElementById('item');
const openItem = document.getElementById('class');


itemmm.addEventListener('click', function(){
	openItem.style.display = 'block'
})


const new1 = document.getElementById('new');
const open1 = document.getElementById('class');

new1.addEventListener('click', function(){
	open1.style.display = 'none'
})





function showhide(){
	var s = document.getElementById('ew');

	if(s.style.display==='none'){
		s.style.display = 'block';

	}
	else{
		s.style.display = 'none';

	}


}


const ma = document.getElementById('make-up');
const gs = document.getElementById('ne1');
const oi = document.getElementById('ppp');

ma.addEventListener('click', function(){
	gs.style.display = 'block';
	oi.style.display = 'block';
})

const back = document.getElementById('bakk');
const off = document.getElementById('ne1');

back.addEventListener('click', function(){
	off.style.display = 'none';
})
