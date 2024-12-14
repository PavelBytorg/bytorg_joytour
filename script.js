document.addEventListener('DOMContentLoaded', function() {
    const destinations = [
        { image: 'src/main/webapp/images/destinations/paris.jpg', name: 'Париж', price: '$1000' },
        { image: 'src/main/webapp/images/destinations/italy.jpg', name: 'Рим', price: '$1200' },
        { image: 'src/main/webapp/images/destinations/maldives.jpg', name: 'Мальдивы', price: '$2000' },
        { image: 'src/main/webapp/images/destinations/tokio.jpg', name: 'Токио', price: '$1800' },
        { image: 'src/main/webapp/images/destinations/bali.jpg', name: 'Дубай', price: '$1500' },
        { image: 'src/main/webapp/images/destinations/newyork.jpg', name: 'Нью-Йорк', price: '$1700' },
        { image: 'src/main/webapp/images/destinations/indonesy.jpg', name: 'Барселона', price: '$1300' },
        { image: 'src/main/webapp/images/destinations/thailand.jpg', name: 'Сидней', price: '$2200' },
        { image: 'src/main/webapp/images/destinations/pata.jpg', name: 'Амстердам', price: '$1400' }
    ];

    const destinationsContainer = document.getElementById('destinations');

    destinations.forEach(destination => {
        const card = document.createElement('div');
        card.className = 'bg-white rounded shadow-lg p-6 transform transition-transform duration-300 hover:scale-105 hover:shadow-xl';
        card.innerHTML = `
            <img src="${destination.image}" alt="Направление" class="w-full h-48 object-cover rounded">
            <h3 class="text-xl font-bold mt-4">${destination.name}</h3>
            <p class="text-gray-600 mt-2">От ${destination.price}</p>
            <a href="#" class="text-blue-600 hover:underline mt-4 inline-block">Подробнее</a>
        `;
        destinationsContainer.appendChild(card);
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const images = [
        'src/main/webapp/images/hero/hero1.jpg',
        'src/main/webapp/images/hero/hero2.jpg',
        'src/main/webapp/images/hero/hero3.jpg',
        'src/main/webapp/images/hero/hero4.jpg'
    ];

    const imageContainer = document.getElementById('image-container');

    // Добавляем изображения в контейнер
    images.forEach((src, index) => {
        const img = document.createElement('img');
        img.src = src;
        img.className = 'absolute inset-0 w-full h-full object-cover transition-opacity duration-1000';
        img.alt = `Image ${index + 1}`;
        img.style.opacity = index === 0 ? '1' : '0'; // Первое изображение видимо, остальные - нет
        imageContainer.appendChild(img);
        console.log(`Добавлено изображение: ${src}`); // Отладочное сообщение
    });

    let currentIndex = 0;

    // Функция для смены изображений
    function changeImage() {
        const currentImage = imageContainer.children[currentIndex];
        console.log(`Смена изображения: ${currentImage.alt}`); // Отладочное сообщение
        currentImage.style.opacity = '0'; // Убираем текущее изображение

        currentIndex = (currentIndex + 1) % imageContainer.children.length;

        const nextImage = imageContainer.children[currentIndex];
        nextImage.style.opacity = '1'; // Показываем следующее изображение
        console.log(`Показано следующее изображение: ${nextImage.alt}`); // Отладочное сообщение
    }

    // Запускаем смену изображений каждые 5 секунд
    setInterval(changeImage, 7000);
});

// Скрипт для отзывов клиентов
document.addEventListener('DOMContentLoaded', function() {
    const testimonials = [
        {
            text: "Отличный сервис! Мы нашли тур своей мечты, спасибо вашей команде за помощь!",
            name: "Алексей",
            location: "Москва, Россия",
            image: "src/main/webapp/images/clients/client1.jpg" // Указан путь к изображению
        },
        {
            text: "Всё было прекрасно организовано! Мы получили массу удовольствия.",
            name: "Мария",
            location: "Санкт-Петербург, Россия",
            image: "src/main/webapp/images/clients/client2.jpg" // Указан путь к изображению
        },
        {
            text: "Лучший отпуск в нашей жизни! Обязательно вернёмся за новым приключением.",
            name: "Иван",
            location: "Новосибирск, Россия",
            image: "src/main/webapp/images/clients/client3.jpg" // Указан путь к изображению
        },
        {
            text: "Невероятное путешествие! Всё прошло гладко, и мы получили массу впечатлений.",
            name: "Елена",
            location: "Екатеринбург, Россия",
            image: "src/main/webapp/images/clients/client4.jpg" // Указан путь к изображению
        },
        {
            text: "Отличный выбор туров и отличное обслуживание. Рекомендую всем!",
            name: "Дмитрий",
            location: "Казань, Россия",
            image: "src/main/webapp/images/clients/client5.jpg" // Указан путь к изображению
        },
        {
            text: "Спасибо за незабываемый отдых! Всё было на высшем уровне.",
            name: "Ольга",
            location: "Ростов-на-Дону, Россия",
            image: "src/main/webapp/images/clients/client6.jpg" // Указан путь к изображению
        }
    ];

    const testimonialsContainer = document.getElementById('testimonials-container');

    testimonials.forEach(testimonial => {
        const card = document.createElement('div');
        card.className = 'bg-gray-100 rounded shadow-lg p-6';
        card.innerHTML = `
            <p class="text-gray-700">"${testimonial.text}"</p>
            <div class="mt-4 flex items-center">
                <img src="${testimonial.image}" alt="Клиент" class="w-12 h-12 rounded-full">
                <div class="ml-4">
                    <p class="font-bold">${testimonial.name}</p>
                    <p class="text-sm text-gray-500">${testimonial.location}</p>
                </div>
            </div>
        `;
        testimonialsContainer.appendChild(card);
    });
});
