// Данные для галереи Колоска
const kolosokGallery = [
    { src: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', category: 'nature', title: 'Въезд в посёлок' },
    { src: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', category: 'nature', title: 'Лесная зона' },
    { src: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', category: 'nature', title: 'Озеро рядом' },
    { src: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', category: 'infrastructure', title: 'Центральная дорога' },
    { src: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', category: 'plots', title: 'Участок №7' },
    { src: 'https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', category: 'life', title: 'Детская площадка' },
    { src: 'https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', category: 'life', title: 'Место для отдыха' },
    { src: 'https://images.unsplash.com/photo-1439066615861-d1af74d74000?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', category: 'infrastructure', title: 'Водонапорная башня' }
];

// Данные участков Колоска
const kolosokPlots = [
    { id: 1, number: "Участок №7", area: 11, price: 420000, status: "available", type: "forest", features: ["Лесной", "Тихий"], location: "Центр посёлка" },
    { id: 2, number: "Участок №12", area: 8, price: 320000, status: "available", type: "field", features: ["Солнечный", "Ровный"], location: "Южная сторона" },
    { id: 3, number: "Участок №18", area: 14, price: 580000, status: "available", type: "forest", features: ["У воды", "Живописный"], location: "У озера" },
    { id: 4, number: "Участок №21", area: 10, price: 390000, status: "reserved", type: "field", features: ["У въезда", "Удобный"], location: "Въездная зона" },
    { id: 5, number: "Участок №25", area: 9, price: 350000, status: "available", type: "forest", features: ["Лесной", "Уютный"], location: "Тихий угол" },
    { id: 6, number: "Участок №30", area: 12, price: 450000, status: "available", type: "field", features: ["Просторный", "Солнечный"], location: "Восточная часть" },
    { id: 7, number: "Участок №33", area: 15, price: 620000, status: "sold", type: "forest", features: ["Лесной", "Большой"], location: "Западный край" },
    { id: 8, number: "Участок №37", area: 7, price: 280000, status: "available", type: "field", features: ["Компактный", "Экономичный"], location: "Юг посёлка" }
];

// Инициализация галереи
function initKolosokGallery() {
    const galleryContainer = document.getElementById('gallery-container');
    if (!galleryContainer) return;
    
    galleryContainer.innerHTML = '';
    
    kolosokGallery.forEach((item) => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        galleryItem.dataset.category = item.category;
        galleryItem.innerHTML = `
            <img src="${item.src}" alt="${item.title}" loading="lazy">
        `;
        galleryContainer.appendChild(galleryItem);
    });
    
    lightGallery(galleryContainer, {
        selector: '.gallery-item',
        download: false,
        counter: true,
        getCaptionFromTitleOrAlt: true
    });
    
    document.querySelectorAll('.gallery-tab').forEach(tab => {
        tab.addEventListener('click', function() {
            document.querySelectorAll('.gallery-tab').forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            
            const category = this.dataset.category;
            
            document.querySelectorAll('.gallery-item').forEach(item => {
                if (category === 'all' || item.dataset.category === category) {
                    item.style.display = 'block';
                    setTimeout(() => {
                        item.style.opacity = '1';
                    }, 10);
                } else {
                    item.style.opacity = '0';
                    setTimeout(() => {
                        item.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
}

// Фильтрация участков
function initPlotFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const plotCards = document.querySelectorAll('.plot-card');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            const filter = this.dataset.filter;
            
            plotCards.forEach(card => {
                if (filter === 'all' || card.dataset.size === filter) {
                    card.style.display = 'block';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, 10);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(20px)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
}

// Модальное окно входа
function initKolosokModal() {
    const modal = document.getElementById('login-modal');
    const loginBtn = document.getElementById('login-btn');
    const closeBtn = document.querySelector('.close');
    const loginForm = document.getElementById('login-form');
    
    if (!modal || !loginBtn) return;
    
    loginBtn.onclick = function() {
        modal.style.display = "block";
        document.body.style.overflow = "hidden";
    }
    
    closeBtn.onclick = function() {
        modal.style.display = "none";
        document.body.style.overflow = "auto";
    }
    
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
            document.body.style.overflow = "auto";
        }
    }
    
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const login = this.querySelector('input[type="text"]').value;
            const password = this.querySelector('input[type="password"]').value;
            
            if (login && password) {
                alert('Добро пожаловать в личный кабинет жителя "Колосок"!\nДоступ к документам открыт.');
                modal.style.display = "none";
                document.body.style.overflow = "auto";
                this.reset();
                
                loginBtn.innerHTML = '<i class="fas fa-user-check"></i> Кабинет';
                loginBtn.disabled = true;
            } else {
                alert('Заполните все поля!');
            }
        });
    }
}

// Форма записи на просмотр
function initKolosokForm() {
    const form = document.getElementById('kolosok-form');
    if (!form) return;
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = {
            name: this.querySelector('input[type="text"]').value,
            phone: this.querySelector('input[type="tel"]').value,
            email: this.querySelector('input[type="email"]').value,
            plot: this.querySelector('select').value,
            message: this.querySelector('textarea').value
        };
        
        if (!formData.name || !formData.phone) {
            alert('Пожалуйста, заполните имя и телефон');
            return;
        }
        
        console.log('Заявка отправлена:', formData);
        
        alert(`Спасибо, ${formData.name}!\nВаша заявка на просмотр участка №${formData.plot} принята.\nМы свяжемся с вами в ближайшее время.`);
        
        this.reset();
    });
}

// Мобильное меню
function initMobileMenu() {
    const toggleBtn = document.getElementById('menu-toggle');
    const nav = document.querySelector('.main-nav');
    
    if (!toggleBtn) return;
    
    toggleBtn.addEventListener('click', () => {
        nav.classList.toggle('active');
        toggleBtn.querySelector('i').classList.toggle('fa-bars');
        toggleBtn.querySelector('i').classList.toggle('fa-times');
    });
    
    document.querySelectorAll('.main-nav a').forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('active');
            toggleBtn.querySelector('i').classList.add('fa-bars');
            toggleBtn.querySelector('i').classList.remove('fa-times');
        });
    });
}

// Плавная прокрутка
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const nav = document.querySelector('.main-nav');
                if (nav.classList.contains('active')) {
                    nav.classList.remove('active');
                    document.getElementById('menu-toggle').querySelector('i').classList.add('fa-bars');
                    document.getElementById('menu-toggle').querySelector('i').classList.remove('fa-times');
                }
                
                const headerHeight = document.getElementById('main-header').offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Подсветка активного раздела
function initActiveSection() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.main-nav a[href^="#"]');
    
    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (scrollY >= (sectionTop - 150)) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

// ФУНКЦИЯ ДЛЯ КАРТЫ КОЛОСКА
function initKolosokMap() {
    const mapContainer = document.getElementById('map');
    if (!mapContainer) return;
    
    if (typeof ymaps === 'undefined') {
        console.log('Yandex Maps API не загружен, показываем заглушку');
        showKolosokMapFallback();
        return;
    }
    
    ymaps.ready(function() {
        try {
            const map = new ymaps.Map('map', {
                center: [55.9, 36.8],
                zoom: 13,
                controls: ['zoomControl', 'fullscreenControl', 'typeSelector']
            });
            
            const kolosokPlacemark = new ymaps.Placemark([55.9, 36.8], {
                balloonContentHeader: 'ДПК "Колосок"',
                balloonContentBody: `
                    <div style="padding: 5px 0;">
                        <p><strong>Адрес:</strong> Истринский район, МО</p>
                        <p><strong>Основан:</strong> 2008 год</p>
                        <p><strong>Участков:</strong> 50+</p>
                        <p><strong>Телефон:</strong> +7 (495) 123-45-67</p>
                    </div>
                `,
                balloonContentFooter: '<em>Семейный дачный посёлок</em>'
            }, {
                preset: 'islands#brownDotIcon',
                iconColor: '#8B4513',
                balloonShadow: false
            });
            
            map.geoObjects.add(kolosokPlacemark);
            kolosokPlacemark.balloon.open();
            
            const roadPolyline = new ymaps.Polyline([
                [55.85, 36.75],
                [55.9, 36.8],
                [55.95, 36.85]
            ], {}, {
                strokeColor: "#8B4513",
                strokeWidth: 4,
                strokeOpacity: 0.7
            });
            
            map.geoObjects.add(roadPolyline);
            
            const lakePlacemark = new ymaps.Placemark([55.92, 36.82], {
                hintContent: 'Озеро Колосок',
                balloonContent: 'Живописное озеро для отдыха и рыбалки'
            }, {
                preset: 'islands#blueWaterCircleIcon'
            });
            
            const forestPlacemark = new ymaps.Placemark([55.88, 36.78], {
                hintContent: 'Смешанный лес',
                balloonContent: 'Грибные и ягодные места'
            }, {
                preset: 'islands#greenParkIcon'
            });
            
            map.geoObjects.add(lakePlacemark);
            map.geoObjects.add(forestPlacemark);
            
            console.log('Карта Колоска успешно загружена');
            
        } catch (error) {
            console.error('Ошибка при создании карты Колоска:', error);
            showKolosokMapFallback();
        }
    });
}

// Функция-заглушка для карты Колоска
function showKolosokMapFallback() {
    const mapContainer = document.getElementById('map');
    if (!mapContainer) return;
    
    mapContainer.innerHTML = `
        <div style="background: linear-gradient(135deg, #8B4513 0%, #D2691E 100%); 
                    height: 100%; 
                    display: flex; 
                    flex-direction: column;
                    align-items: center; 
                    justify-content: center; 
                    color: white;
                    border-radius: 10px;
                    padding: 30px;
                    text-align: center;
                    position: relative;
                    overflow: hidden;
                    box-shadow: 0 10px 30px rgba(139, 69, 19, 0.3);">
            
            <div style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; 
                        background: 
                            radial-gradient(circle at 20% 80%, rgba(255, 215, 0, 0.1) 0%, transparent 50%),
                            radial-gradient(circle at 80% 20%, rgba(255, 215, 0, 0.1) 0%, transparent 50%);">
            </div>
            
            <i class="fas fa-wheat fa-4x" style="margin-bottom: 20px; z-index: 1; color: #FFD700;"></i>
            <h3 style="margin-bottom: 10px; z-index: 1;">ДПК "Колосок"</h3>
            <p style="margin-bottom: 25px; opacity: 0.9; z-index: 1;">Семейный дачный посёлок</p>
            
            <div style="background: rgba(255, 255, 255, 0.1); 
                        padding: 20px; 
                        border-radius: 10px; 
                        margin-bottom: 20px;
                        z-index: 1;
                        backdrop-filter: blur(5px);">
                <div style="display: flex; align-items: center; margin-bottom: 10px;">
                    <i class="fas fa-map-marker-alt" style="color: #FFD700; margin-right: 10px;"></i>
                    <div style="text-align: left;">
                        <strong>Адрес:</strong>
                        <p style="margin: 5px 0 0 0; font-size: 0.9rem;">Истринский район, Московская область</p>
                    </div>
                </div>
                
                <div style="display: flex; align-items: center; margin-bottom: 10px;">
                    <i class="fas fa-car" style="color: #FFD700; margin-right: 10px;"></i>
                    <div style="text-align: left;">
                        <strong>Как добраться:</strong>
                        <p style="margin: 5px 0 0 0; font-size: 0.9rem;">40 км от МКАД по Новорижскому шоссе</p>
                        <p style="margin: 2px 0 0 0; font-size: 0.9rem;">Поворот на 46 км, далее 5 км по указателям</p>
                    </div>
                </div>
                
                <div style="display: flex; align-items: center;">
                    <i class="fas fa-compass" style="color: #FFD700; margin-right: 10px;"></i>
                    <div style="text-align: left;">
                        <strong>Координаты:</strong>
                        <p style="margin: 5px 0 0 0; font-size: 0.9rem; font-family: monospace;">55.9°N, 36.8°E</p>
                    </div>
                </div>
            </div>
            
            <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 15px; width: 100%; z-index: 1;">
                <div style="background: rgba(255, 255, 255, 0.1); padding: 10px; border-radius: 5px;">
                    <i class="fas fa-tree" style="color: #FFD700; margin-bottom: 5px;"></i>
                    <p style="margin: 5px 0 0 0; font-size: 0.8rem;">Смешанный лес</p>
                </div>
                <div style="background: rgba(255, 255, 255, 0.1); padding: 10px; border-radius: 5px;">
                    <i class="fas fa-water" style="color: #FFD700; margin-bottom: 5px;"></i>
                    <p style="margin: 5px 0 0 0; font-size: 0.8rem;">Озеро</p>
                </div>
                <div style="background: rgba(255, 255, 255, 0.1); padding: 10px; border-radius: 5px;">
                    <i class="fas fa-road" style="color: #FFD700; margin-bottom: 5px;"></i>
                    <p style="margin: 5px 0 0 0; font-size: 0.8rem;">Асфальт</p>
                </div>
                <div style="background: rgba(255, 255, 255, 0.1); padding: 10px; border-radius: 5px;">
                    <i class="fas fa-shield-alt" style="color: #FFD700; margin-bottom: 5px;"></i>
                    <p style="margin: 5px 0 0 0; font-size: 0.8rem;">Охрана</p>
                </div>
            </div>
            
            <button onclick="alert('Для точного маршрута используйте навигатор или позвоните нам: +7 (495) 123-45-67')" 
                    style="background: #FFD700; 
                           color: #8B4513; 
                           border: none; 
                           padding: 12px 25px; 
                           border-radius: 25px; 
                           cursor: pointer; 
                           margin-top: 25px; 
                           font-weight: bold;
                           z-index: 1;
                           transition: all 0.3s;
                           box-shadow: 0 4px 15px rgba(255, 215, 0, 0.3);">
                <i class="fas fa-directions"></i> Построить маршрут
            </button>
        </div>
    `;
}

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    console.log('ДПК "Колосок" загружен');
    
    // Инициализируем все функции
    initKolosokGallery();
    initPlotFilters();
    initKolosokModal();
    initKolosokForm();
    initMobileMenu();
    initSmoothScroll();
    initActiveSection();
    initKolosokMap();
    
    // Анимация при загрузке
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// Предзагрузка картинок
window.addEventListener('load', function() {
    const preloader = document.createElement('div');
    preloader.id = 'preloader';
    preloader.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: #8B4513;
        z-index: 9999;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: opacity 0.5s;
    `;
    
    const spinner = document.createElement('div');
    spinner.innerHTML = '<i class="fas fa-wheat fa-spin fa-3x" style="color: #FFD700;"></i>';
    preloader.appendChild(spinner);
    
    document.body.appendChild(preloader);
    
    setTimeout(() => {
        preloader.style.opacity = '0';
        setTimeout(() => {
            preloader.remove();
        }, 500);
    }, 1000);
});