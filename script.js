// ДАННЫЕ ДЛЯ УЧАСТКОВ ЗАПОВЕДНОГО
const zapovednoePlots = [
    { id: 1, number: "Участок №7", area: 8, price: 320000, status: "available", type: "field", image: "plot1.jpg", features: ["Ровный", "Солнечный"] },
    { id: 2, number: "Участок №12", area: 10, price: 420000, status: "available", type: "forest", image: "plot2.jpg", features: ["Лесной", "Тихий"] },
    { id: 3, number: "Участок №15", area: 12, price: 480000, status: "available", type: "field", image: "plot3.jpg", features: ["У въезда", "Ровный"] },
    { id: 4, number: "Участок №18", area: 6, price: 280000, status: "available", type: "forest", image: "plot4.jpg", features: ["Лесной", "Уютный"] },
    { id: 5, number: "Участок №21", area: 15, price: 620000, status: "available", type: "field", image: "plot5.jpg", features: ["Большой", "Просторный"] },
    { id: 6, number: "Участок №24", area: 9, price: 380000, status: "reserved", type: "forest", image: "plot6.jpg", features: ["Лесной", "Тихий"] },
    { id: 7, number: "Участок №27", area: 11, price: 450000, status: "available", type: "field", image: "plot7.jpg", features: ["Ровный", "Солнечный"] },
    { id: 8, number: "Участок №30", area: 14, price: 580000, status: "sold", type: "forest", image: "plot8.jpg", features: ["Лесной", "Красивый"] },
    { id: 9, number: "Участок №33", area: 7, price: 300000, status: "available", type: "field", image: "plot9.jpg", features: ["Маленький", "Уютный"] },
    { id: 10, number: "Участок №36", area: 13, price: 520000, status: "available", type: "forest", image: "plot10.jpg", features: ["Лесной", "Просторный"] },
    { id: 11, number: "Участок №39", area: 8, price: 340000, status: "reserved", type: "field", image: "plot11.jpg", features: ["Ровный", "Солнечный"] },
    { id: 12, number: "Участок №42", area: 10, price: 410000, status: "available", type: "forest", image: "plot12.jpg", features: ["Лесной", "Тихий"] },
    { id: 13, number: "Участок №45", area: 16, price: 680000, status: "available", type: "field", image: "plot13.jpg", features: ["Огромный", "Просторный"] },
    { id: 14, number: "Участок №48", area: 9, price: 370000, status: "sold", type: "forest", image: "plot14.jpg", features: ["Лесной", "Уютный"] },
    { id: 15, number: "Участок №51", area: 11, price: 460000, status: "available", type: "field", image: "plot15.jpg", features: ["Ровный", "Солнечный"] }
];

// ДАННЫЕ ДЛЯ ГАЛЕРЕИ ЗАПОВЕДНОГО
const zapovednoeGallery = [
    { src: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', category: 'nature', title: 'Въезд в посёлок' },
    { src: 'https://images.unsplash.com/photo-1464207687429-7505649dae38?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', category: 'nature', title: 'Лесная зона' },
    { src: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', category: 'nature', title: 'Озеро рядом' },
    { src: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', category: 'nature', title: 'Живописный вид' },
    { src: 'https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', category: 'infrastructure', title: 'Центральная дорога' },
    { src: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', category: 'infrastructure', title: 'КПП и шлагбаум' },
    { src: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', category: 'plots', title: 'Участок №7' },
    { src: 'https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', category: 'plots', title: 'Участок №12' },
    { src: 'https://images.unsplash.com/photo-1439066615861-d1af74d74000?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', category: 'life', title: 'Детская площадка' },
    { src: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', category: 'life', title: 'Место для отдыха' },
    { src: 'https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', category: 'infrastructure', title: 'Водонапорная башня' },
    { src: 'https://images.unsplash.com/photo-1513584684374-8bab748fbf90?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', category: 'nature', title: 'Осенний лес' }
];

// ФУНКЦИЯ ДЛЯ ФИЛЬТРАЦИИ УЧАСТКОВ
function filterPlots() {
    const activeFilters = {
        area: document.querySelector('.filter-btn.active[data-filter^="area"]')?.dataset.filter || 'all',
        price: document.querySelector('.filter-btn.active[data-filter^="price"]')?.dataset.filter || 'all',
        status: document.querySelector('.filter-btn.active[data-filter^="status"]')?.dataset.filter || 'all'
    };
    
    const plotsGrid = document.getElementById('plots-grid');
    if (!plotsGrid) return;
    
    plotsGrid.innerHTML = '';
    let count = 0;
    
    zapovednoePlots.forEach(plot => {
        let show = true;
        
        // Фильтр по площади
        if (activeFilters.area !== 'all') {
            if (activeFilters.area === 'area-6-8' && !(plot.area >= 6 && plot.area <= 8)) show = false;
            if (activeFilters.area === 'area-8-10' && !(plot.area >= 8 && plot.area <= 10)) show = false;
            if (activeFilters.area === 'area-10-12' && !(plot.area >= 10 && plot.area <= 12)) show = false;
            if (activeFilters.area === 'area-12plus' && !(plot.area > 12)) show = false;
        }
        
        // Фильтр по цене
        if (activeFilters.price !== 'all') {
            if (activeFilters.price === 'price-300' && plot.price > 300000) show = false;
            if (activeFilters.price === 'price-300-500' && (plot.price < 300000 || plot.price > 500000)) show = false;
            if (activeFilters.price === 'price-500plus' && plot.price < 500000) show = false;
        }
        
        // Фильтр по статусу
        if (activeFilters.status !== 'all') {
            if (activeFilters.status === 'status-available' && plot.status !== 'available') show = false;
            if (activeFilters.status === 'status-reserved' && plot.status !== 'reserved') show = false;
            if (activeFilters.status === 'status-sold' && plot.status !== 'sold') show = false;
        }
        
        if (show) {
            renderPlotCard(plot);
            count++;
        }
    });
    
    document.getElementById('plot-count').textContent = count;
}

// ФУНКЦИЯ ДЛЯ ОТРИСОВКИ КАРТОЧКИ УЧАСТКА
function renderPlotCard(plot) {
    const plotsGrid = document.getElementById('plots-grid');
    if (!plotsGrid) return;
    
    const statusText = {
        'available': 'В продаже',
        'reserved': 'Бронь',
        'sold': 'Продано'
    };
    
    const statusClass = {
        'available': 'available',
        'reserved': 'reserved',
        'sold': 'sold'
    };
    
    const plotCard = document.createElement('div');
    plotCard.className = 'plot-card';
    plotCard.innerHTML = `
        <div class="plot-image" style="background: linear-gradient(to right, #${Math.floor(Math.random()*16777215).toString(16)}, #${Math.floor(Math.random()*16777215).toString(16)})">
            <span class="plot-badge ${statusClass[plot.status]}">${statusText[plot.status]}</span>
        </div>
        <div class="plot-content">
            <h3>${plot.number}</h3>
            <div class="plot-features">
                <span><i class="fas fa-ruler-combined"></i> ${plot.area} соток</span>
                <span><i class="fas ${plot.type === 'forest' ? 'fa-tree' : 'fa-sun'}"></i> ${plot.type === 'forest' ? 'Лесной' : 'Полевой'}</span>
            </div>
            <div class="plot-price">${plot.price.toLocaleString('ru-RU')} ₽</div>
            <p>${plot.features.join(', ')}</p>
            <button class="plot-btn" onclick="showPlotDetails(${plot.id})">
                <i class="fas fa-info-circle"></i> Подробнее
            </button>
        </div>
    `;
    
    plotsGrid.appendChild(plotCard);
}

// ФУНКЦИЯ ДЛЯ ГАЛЕРЕИ
function initGallery() {
    const galleryContainer = document.getElementById('gallery-container');
    if (!galleryContainer) return;
    
    // Очищаем галерею
    galleryContainer.innerHTML = '';
    
    // Добавляем все изображения
    zapovednoeGallery.forEach(item => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        galleryItem.dataset.category = item.category;
        galleryItem.innerHTML = `
            <img src="${item.src}" alt="${item.title}" loading="lazy">
        `;
        galleryContainer.appendChild(galleryItem);
    });
    
    // Инициализируем LightGallery
    lightGallery(galleryContainer, {
        selector: '.gallery-item',
        download: false,
        counter: true,
        getCaptionFromTitleOrAlt: true
    });
    
    // Добавляем обработчики для фильтров галереи
    document.querySelectorAll('.gallery-tab').forEach(tab => {
        tab.addEventListener('click', function() {
            // Убираем активный класс у всех вкладок
            document.querySelectorAll('.gallery-tab').forEach(t => t.classList.remove('active'));
            // Добавляем активный класс текущей вкладке
            this.classList.add('active');
            
            const category = this.dataset.category;
            
            // Показываем/скрываем изображения
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

// ФУНКЦИЯ ДЛЯ ЯНДЕКС.КАРТЫ
function initMap() {
    // Проверяем, загрузился ли Yandex Maps API
    if (typeof ymaps === 'undefined') {
        console.error('Yandex Maps API не загружен');
        showMapFallback();
        return;
    }
    
    ymaps.ready(function() {
        try {
            // Создаем карту
            const map = new ymaps.Map('map', {
                center: [59.9343, 30.3351], // Координаты Санкт-Петербурга
                zoom: 10,
                controls: ['zoomControl', 'fullscreenControl']
            });
            
            // Добавляем метку для Заповедного (Всеволожский район)
            const zapovednoePlacemark = new ymaps.Placemark([60.0, 30.5], {
                balloonContent: `
                    <div style="padding: 10px;">
                        <h3 style="margin: 0 0 10px 0; color: #2d5a3b;">ДПК "Заповедное"</h3>
                        <p style="margin: 5px 0;"><strong>Адрес:</strong> Всеволожский район, ЛО</p>
                        <p style="margin: 5px 0;"><strong>Площадь:</strong> 45 га</p>
                        <p style="margin: 5px 0;"><strong>Участков:</strong> 80+</p>
                        <button onclick="window.location.href='#contacts'" style="background: #2d5a3b; color: white; border: none; padding: 8px 15px; border-radius: 4px; cursor: pointer; margin-top: 10px;">
                            Контакты
                        </button>
                    </div>
                `
            }, {
                preset: 'islands#greenDotIcon',
                iconColor: '#2d5a3b'
            });
            
            // Добавляем метку для Колоска (Истринский район - для примера)
            const kolosokPlacemark = new ymaps.Placemark([55.9, 36.8], {
                balloonContent: `
                    <div style="padding: 10px;">
                        <h3 style="margin: 0 0 10px 0; color: #8B4513;">ДПК "Колосок"</h3>
                        <p style="margin: 5px 0;"><strong>Адрес:</strong> Истринский район, МО</p>
                        <p style="margin: 5px 0;"><strong>Основан:</strong> 2008 год</p>
                        <p style="margin: 5px 0;"><strong>Участков:</strong> 50+</p>
                        <button onclick="window.location.href='kolosok.html'" style="background: #8B4513; color: white; border: none; padding: 8px 15px; border-radius: 4px; cursor: pointer; margin-top: 10px;">
                            Перейти к Колоску
                        </button>
                    </div>
                `
            }, {
                preset: 'islands#brownDotIcon',
                iconColor: '#8B4513'
            });
            
            // Добавляем метки на карту
            map.geoObjects.add(zapovednoePlacemark);
            map.geoObjects.add(kolosokPlacemark);
            
            // Открываем балун Заповедного по умолчанию
            zapovednoePlacemark.balloon.open();
            
            // Добавляем линию между посёлками (для наглядности)
            const polyline = new ymaps.Polyline([
                [60.0, 30.5], // Заповедное
                [55.9, 36.8]  // Колосок
            ], {}, {
                strokeColor: "#2d5a3b",
                strokeWidth: 2,
                strokeOpacity: 0.5
            });
            
            map.geoObjects.add(polyline);
            
            // Устанавливаем границы отображения
            map.setBounds(map.geoObjects.getBounds(), {
                checkZoomRange: true
            });
            
            console.log('Карта успешно загружена с API ключом');
            
        } catch (error) {
            console.error('Ошибка при создании карты:', error);
            showMapFallback();
        }
    });
}

// Функция-заглушка если карта не загрузилась
function showMapFallback() {
    const mapContainer = document.getElementById('map');
    if (!mapContainer) return;
    
    mapContainer.innerHTML = `
        <div style="background: linear-gradient(135deg, #2d5a3b 0%, #4caf50 100%); 
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
                    overflow: hidden;">
            <div style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" fill="none" stroke="rgba(255,255,255,0.1)" stroke-width="1"/></svg>');"></div>
            
            <i class="fas fa-map-marked-alt fa-4x" style="margin-bottom: 20px; z-index: 1;"></i>
            <h3 style="margin-bottom: 15px; z-index: 1;">Карта расположения</h3>
            
            <div style="display: flex; gap: 20px; margin: 20px 0; z-index: 1;">
                <div style="text-align: left;">
                    <div style="display: flex; align-items: center; margin-bottom: 10px;">
                        <div style="width: 12px; height: 12px; background: #2d5a3b; border-radius: 50%; margin-right: 10px;"></div>
                        <strong>ДПК "Заповедное"</strong>
                    </div>
                    <p style="font-size: 0.9rem; margin: 5px 0; opacity: 0.9;">
                        <i class="fas fa-map-marker-alt"></i> Всеволожский район, ЛО
                    </p>
                    <p style="font-size: 0.9rem; margin: 5px 0; opacity: 0.9;">
                        <i class="fas fa-car"></i> 25 км от КАД
                    </p>
                </div>
                
                <div style="text-align: left;">
                    <div style="display: flex; align-items: center; margin-bottom: 10px;">
                        <div style="width: 12px; height: 12px; background: #8B4513; border-radius: 50%; margin-right: 10px;"></div>
                        <strong>ДПК "Колосок"</strong>
                    </div>
                    <p style="font-size: 0.9rem; margin: 5px 0; opacity: 0.9;">
                        <i class="fas fa-map-marker-alt"></i> Истринский район, МО
                    </p>
                    <p style="font-size: 0.9rem; margin: 5px 0; opacity: 0.9;">
                        <i class="fas fa-car"></i> 40 км от МКАД
                    </p>
                </div>
            </div>
            
            <div style="width: 80%; height: 2px; background: rgba(255,255,255,0.2); margin: 20px 0; z-index: 1;"></div>
            
            <div style="background: rgba(255,255,255,0.1); padding: 15px; border-radius: 8px; z-index: 1;">
                <p style="font-size: 0.9rem; margin: 5px 0;">
                    <i class="fas fa-info-circle"></i> Координаты для навигатора:
                </p>
                <p style="font-size: 0.85rem; margin: 5px 0; font-family: monospace;">
                    Заповедное: 60.0°N, 30.5°E<br>
                    Колосок: 55.9°N, 36.8°E
                </p>
            </div>
            
            <button onclick="alert('Для точного маршрута используйте Яндекс.Навигатор или 2ГИС')" 
                    style="background: white; color: #2d5a3b; border: none; padding: 10px 20px; border-radius: 5px; cursor: pointer; margin-top: 20px; font-weight: bold; z-index: 1;">
                <i class="fas fa-directions"></i> Построить маршрут
            </button>
        </div>
    `;
}
// ФУНКЦИЯ ДЛЯ МОДАЛЬНОГО ОКНА
function initModal() {
    const modal = document.getElementById('login-modal');
    const loginBtn = document.getElementById('login-btn');
    const closeBtn = document.querySelector('.close');
    
    if (!modal || !loginBtn) return;
    
    // Открытие модального окна
    loginBtn.addEventListener('click', () => {
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    });
    
    // Закрытие модального окна
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });
    
    // Закрытие при клике вне окна
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
    
    // Обработка формы входа
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const login = this.querySelector('input[type="text"]').value;
            const password = this.querySelector('input[type="password"]').value;
            
            if (login && password) {
                alert('Вход выполнен успешно! Добро пожаловать в личный кабинет.');
                modal.style.display = 'none';
                document.body.style.overflow = 'auto';
                this.reset();
                
                // Меняем кнопку входа
                loginBtn.innerHTML = '<i class="fas fa-user-check"></i> Кабинет';
                loginBtn.disabled = true;
                loginBtn.style.opacity = '0.7';
            } else {
                alert('Заполните все поля!');
            }
        });
    }
}

// ФУНКЦИЯ ДЛЯ ФОРМЫ ОБРАТНОЙ СВЯЗИ
function initForm() {
    const form = document.getElementById('feedback-form');
    if (!form) return;
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Проверяем заполнение
        const inputs = this.querySelectorAll('input[required], select[required], textarea[required]');
        let isValid = true;
        
        inputs.forEach(input => {
            if (!input.value.trim()) {
                isValid = false;
                input.style.borderColor = 'red';
            } else {
                input.style.borderColor = '#ddd';
            }
        });
        
        if (isValid) {
            const name = this.querySelector('input[type="text"]').value;
            alert(`Спасибо, ${name}! Ваше сообщение отправлено. Мы свяжемся с вами в ближайшее время.`);
            this.reset();
        } else {
            alert('Пожалуйста, заполните все обязательные поля!');
        }
    });
}

// ФУНКЦИЯ ДЛЯ МОБИЛЬНОГО МЕНЮ
function initMobileMenu() {
    const toggleBtn = document.getElementById('menu-toggle');
    const nav = document.querySelector('.main-nav');
    
    if (!toggleBtn) return;
    
    toggleBtn.addEventListener('click', () => {
        nav.classList.toggle('active');
        const icon = toggleBtn.querySelector('i');
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-times');
    });
    
    // Закрываем меню при клике на ссылку
    document.querySelectorAll('.main-nav a').forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('active');
            toggleBtn.querySelector('i').classList.add('fa-bars');
            toggleBtn.querySelector('i').classList.remove('fa-times');
        });
    });
}

// ФУНКЦИЯ ДЛЯ ПЛАВНОЙ ПРОКРУТКИ
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // Закрываем мобильное меню если открыто
                const nav = document.querySelector('.main-nav');
                if (nav.classList.contains('active')) {
                    nav.classList.remove('active');
                    document.getElementById('menu-toggle').querySelector('i').classList.add('fa-bars');
                    document.getElementById('menu-toggle').querySelector('i').classList.remove('fa-times');
                }
                
                // Прокручиваем
                const headerHeight = document.getElementById('main-header').offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // Обновляем активный пункт меню
                document.querySelectorAll('.main-nav a').forEach(link => {
                    link.classList.remove('active');
                });
                this.classList.add('active');
            }
        });
    });
}

// ФУНКЦИЯ ДЛЯ ПОДСВЕТКИ АКТИВНОГО РАЗДЕЛА
function initActiveSection() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.main-nav a[href^="#"]');
    
    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            const headerHeight = document.getElementById('main-header').offsetHeight;
            
            if (window.scrollY >= (sectionTop - headerHeight - 100)) {
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

// ФУНКЦИЯ ДЛЯ ИНИЦИАЛИЗАЦИИ ФИЛЬТРОВ
function initFilters() {
    document.querySelectorAll('.filter-btn').forEach(button => {
        button.addEventListener('click', function() {
            // Если это группа фильтров по площади, убираем активный класс у других кнопок площади
            if (this.dataset.filter.startsWith('area')) {
                document.querySelectorAll('.filter-btn[data-filter^="area"]').forEach(btn => {
                    btn.classList.remove('active');
                });
            }
            
            // Если это группа фильтров по цене, убираем активный класс у других кнопок цены
            if (this.dataset.filter.startsWith('price')) {
                document.querySelectorAll('.filter-btn[data-filter^="price"]').forEach(btn => {
                    btn.classList.remove('active');
                });
            }
            
            // Если это группа фильтров по статусу, убираем активный класс у других кнопок статуса
            if (this.dataset.filter.startsWith('status')) {
                document.querySelectorAll('.filter-btn[data-filter^="status"]').forEach(btn => {
                    btn.classList.remove('active');
                });
            }
            
            // Добавляем активный класс текущей кнопке
            this.classList.add('active');
            
            // Если это кнопка "Все", убираем все фильтры
            if (this.dataset.filter === 'all') {
                document.querySelectorAll('.filter-btn').forEach(btn => {
                    if (btn !== this) btn.classList.remove('active');
                });
            }
            
            // Применяем фильтры
            filterPlots();
        });
    });
}

// ФУНКЦИЯ ДЛЯ ПОКАЗА ДЕТАЛЕЙ УЧАСТКА
function showPlotDetails(plotId) {
    const plot = zapovednoePlots.find(p => p.id === plotId);
    if (!plot) return;
    
    const statusText = {
        'available': 'В продаже',
        'reserved': 'Забронирован',
        'sold': 'Продан'
    };
    
    const modalContent = `
        <div class="modal">
            <div class="modal-content" style="max-width: 500px;">
                <span class="close" onclick="this.parentElement.parentElement.style.display='none'">&times;</span>
                <h2>${plot.number}</h2>
                <div style="display: flex; gap: 20px; margin: 20px 0;">
                    <div style="flex: 1;">
                        <p><strong>Площадь:</strong> ${plot.area} соток</p>
                        <p><strong>Цена:</strong> ${plot.price.toLocaleString('ru-RU')} ₽</p>
                        <p><strong>Статус:</strong> ${statusText[plot.status]}</p>
                        <p><strong>Тип:</strong> ${plot.type === 'forest' ? 'Лесной участок' : 'Полевой участок'}</p>
                    </div>
                    <div style="flex: 1;">
                        <p><strong>Особенности:</strong></p>
                        <ul>
                            ${plot.features.map(feature => `<li>${feature}</li>`).join('')}
                        </ul>
                    </div>
                </div>
                <button class="plot-btn" onclick="alert('Заявка на просмотр участка ${plot.number} отправлена! Мы свяжемся с вами.'); this.parentElement.parentElement.style.display='none'">
                    <i class="fas fa-calendar-alt"></i> Записаться на просмотр
                </button>
            </div>
        </div>
    `;
    
    // Создаем и показываем модальное окно
    const modalDiv = document.createElement('div');
    modalDiv.innerHTML = modalContent;
    document.body.appendChild(modalDiv);
    
    // Показываем модальное окно
    modalDiv.querySelector('.modal').style.display = 'block';
    
    // Закрытие при клике вне окна
    modalDiv.querySelector('.modal').addEventListener('click', function(e) {
        if (e.target === this) {
            
            this.style.display = 'none';
            document.body.removeChild(modalDiv);
        }
    });
}

// ОСНОВНАЯ ИНИЦИАЛИЗАЦИЯ
document.addEventListener('DOMContentLoaded', function() {
    console.log('ДПК "Заповедное" загружен');
    
    // Инициализируем все компоненты
    filterPlots(); // Сначала загружаем участки
    initGallery();
    initMap();
    initModal();
    initForm();
    initMobileMenu();
    initSmoothScroll();
    initActiveSection();
    initFilters();
    
    // Анимация при загрузке
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
    
    // Предзагрузка
    window.addEventListener('load', function() {
        const preloader = document.createElement('div');
        preloader.id = 'preloader';
        preloader.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: #2d5a3b;
            z-index: 9999;
            display: flex;
            justify-content: center;
            align-items: center;
            transition: opacity 0.5s;
        `;
        
        const spinner = document.createElement('div');
        spinner.innerHTML = '<i class="fas fa-tree fa-spin fa-3x" style="color: #8bc34a;"></i>';
        preloader.appendChild(spinner);
        
        document.body.appendChild(preloader);
        
        setTimeout(() => {
            preloader.style.opacity = '0';
            setTimeout(() => {
                preloader.remove();
            }, 500);
        }, 800);
    });
});