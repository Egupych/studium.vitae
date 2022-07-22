//::::::::::::::::::::::::::::::::::::::::::::::::::
//Анимация прокрутки до якоря
//::::::::::::::::::::::::::::::::::::::::::::::::::

function setScrollIntoView1(top) {
	const biography = document.querySelector('.biography');
	biography.scrollIntoView(top);
}

function setScrollIntoView1Options(top) {
	const biography = document.querySelector('.biography');
	biography.scrollIntoView({
		block: "start",
		inline: "nearest",
		behavior: "smooth"
	});
}

function setScrollIntoView2(top) {
	const lesson = document.querySelector('.lesson');
	lesson.scrollIntoView(top);
}

function setScrollIntoView2Options(top) {
	const lesson = document.querySelector('.lesson');
	lesson.scrollIntoView({
		block: "start",
		inline: "nearest",
		behavior: "smooth"
	});
}

function setScrollIntoView3(top) {
	const boxprice = document.querySelector('.boxprice');
	boxprice.scrollIntoView(top);
}

function setScrollIntoView3Options(top) {
	const boxprice = document.querySelector('.boxprice');
	boxprice.scrollIntoView({
		block: "start",
		inline: "nearest",
		behavior: "smooth"
	});
}

function setScrollIntoView4(top) {
	const themes = document.querySelector('.themes');
	themes.scrollIntoView(top);
}

function setScrollIntoView4Options(top) {
	const themes = document.querySelector('.themes');
	themes.scrollIntoView({
		block: "start",
		inline: "nearest",
		behavior: "smooth"
	});
}

function setScrollIntoView5(top) {
	const header = document.querySelector('header');
	header.scrollIntoView(top);
}

function setScrollIntoView5Options(top) {
	const header = document.querySelector('header');
	header.scrollIntoView({
		block: "start",
		inline: "nearest",
		behavior: "smooth"
	});
}

function setScrollIntoView6(top) {
	const header = document.querySelector('header');
	header.scrollIntoView(top);
}

function setScrollIntoView6Options(top) {
	const header = document.querySelector('header');
	header.scrollIntoView({
		block: "start",
		inline: "nearest",
		behavior: "smooth"
	});
}

const animItems = document.querySelectorAll("._anim-items");

if (animItems.length>0) {
	window.addEventListener("scroll", animOnScroll);
	function animOnScroll() {
		for (let index = 0; index < animItems.length; index++) {
			const animItem = animItems [index];
			const animItemHeight = animItem.offsetHeight;
			const animItemOffset = offset(animItem).top;
			const animStart = 1;
		
			let animItemPoint = window.innerHeight - animItemHeight / animStart;
			if (animItemHeight > window.innerHeight) {
				animItemPoint = window.innerHeight - window.innerHeight / animStart;
			}

			if ((scrollY> animItemOffset - animItemPoint) && scrollY < (animItemOffset + animItemHeight)) {
				animItem.classList.add('_active');
			}  else {
				if (!animItem.classList.contains('_anim-no')){
					animItem.classList.remove('_active');
				}
			}
		}
	}

	function offset(el) {
		const rect = el.getBoundingClientRect(),
			scrollLeft = window.scrollX || document.documentElement.scrollLeft,
			scrollTop = window.scrollY || document.documentElement.scrollTop;
		return {top: rect.top + scrollTop, left: rect.left + scrollLeft}
	}
	setTimeout(()=>{
		animOnScroll();
	},300);

}

//::::::::::::::::::::::::::::::::::::::::::::::::::
//Анимация слайдов карусели
//::::::::::::::::::::::::::::::::::::::::::::::::::

const slides = document.querySelectorAll(".slide");

for (const slide of slides) {
  slide.addEventListener("mouseover", () => {
    clearActiveClasses();
    
    slide.classList.add("active");
  });
}

function clearActiveClasses() {
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });
}

