import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/90 backdrop-blur-md border-b border-gray-100 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-instagram-pink via-instagram-coral to-instagram-purple flex items-center justify-center">
                  <span className="text-white font-heading font-bold text-lg">A</span>
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">✨</span>
                </div>
              </div>
              <h1 className="text-2xl font-heading font-bold bg-gradient-to-r from-instagram-pink to-instagram-coral bg-clip-text text-transparent">
                АДЕЛИНА АРДЕН
              </h1>
            </div>
            
            <nav className="hidden md:flex space-x-8">
              <a href="/" className="font-body text-gray-600 hover:text-instagram-pink transition-colors">
                Главная
              </a>
              <a href="/about" className="font-body text-instagram-pink font-semibold transition-colors">
                Обо мне
              </a>
              <a href="#" className="font-body text-gray-600 hover:text-instagram-pink transition-colors">
                Блог
              </a>
              <a href="#" className="font-body text-gray-600 hover:text-instagram-pink transition-colors">
                Фото
              </a>
              <a href="#" className="font-body text-gray-600 hover:text-instagram-pink transition-colors">
                Контакты
              </a>
              <a href="#" className="font-body text-gray-600 hover:text-instagram-pink transition-colors">
                Сотрудничество
              </a>
            </nav>

            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm">
                <Icon name="Instagram" size={20} />
              </Button>
              <Button variant="ghost" size="sm">
                <Icon name="Youtube" size={20} />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* About Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-pink-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-heading font-bold text-gray-900 mb-6">
                  ✨ Привет! Я — Аделина Арден
                </h2>
                <div className="space-y-6 font-body text-gray-600">
                  <p className="text-lg leading-relaxed text-gray-700">
                    Я создаю это пространство как свой личный дневник вдохновения.
                  </p>
                  <div className="space-y-4">
                    <p className="flex items-start space-x-3">
                      <span className="text-2xl">☕</span>
                      <span className="text-lg">Утро для меня начинается с кофе и мягкого света из окна.</span>
                    </p>
                    <p className="flex items-start space-x-3">
                      <span className="text-2xl">📚</span>
                      <span className="text-lg">Вечером люблю читать, писать и ловить атмосферу спокойствия.</span>
                    </p>
                    <p className="flex items-start space-x-3">
                      <span className="text-2xl">💄</span>
                      <span className="text-lg">Моё вдохновение — в моде, красоте, уходовых ритуалах и маленьких деталях, которые делают жизнь уютнее.</span>
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-instagram-pink">
                    <p className="text-lg font-medium text-gray-800 italic">
                      Я верю: счастье — в мелочах. В запахе свежих цветов, в тепле пледа, в улыбке, подаренной случайно.
                    </p>
                  </div>
                  <p className="text-xl text-gray-700 font-medium">
                    <span className="text-instagram-pink font-semibold">Добро пожаловать в мой мир</span> 🌙 Здесь будет нежность, стиль и немного магии момента.
                  </p>
                </div>

                <div className="flex flex-wrap gap-3 mt-8">
                  {['Fashion', 'Beauty', 'Lifestyle', 'Self-care', 'Inspiration'].map((tag) => (
                    <Badge key={tag} variant="outline" className="border-instagram-coral text-instagram-coral px-4 py-2 text-sm">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex space-x-4 mt-8">
                  <Button className="bg-gradient-to-r from-instagram-pink to-instagram-coral hover:opacity-90">
                    <Icon name="Mail" className="mr-2" size={20} />
                    Написать мне
                  </Button>
                  <Button variant="outline" className="border-instagram-blue text-instagram-blue hover:bg-instagram-blue hover:text-white">
                    Скачать медиакит
                  </Button>
                </div>
              </div>

              <div className="flex justify-center">
                <div className="w-96 h-[32rem] rounded-3xl overflow-hidden shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-300">
                  <img 
                    src="https://cdn.poehali.dev/files/3322f803-e723-499e-84ff-4c3dc12bd9e4.png" 
                    alt="Аделина Арден" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-heading font-bold text-gray-900 mb-4">
                Моё сообщество
              </h3>
              <p className="text-gray-600 font-body">
                Вместе мы создаём пространство красоты и вдохновения
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center bg-gradient-to-br from-pink-50 to-orange-50 p-8 rounded-2xl">
                <div className="w-16 h-16 bg-instagram-pink rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Users" size={32} className="text-white" />
                </div>
                <h4 className="text-3xl font-heading font-bold text-gray-900 mb-2">125K+</h4>
                <p className="text-gray-600 font-body">Подписчиков в Instagram</p>
              </div>

              <div className="text-center bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl">
                <div className="w-16 h-16 bg-instagram-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="TrendingUp" size={32} className="text-white" />
                </div>
                <h4 className="text-3xl font-heading font-bold text-gray-900 mb-2">2M+</h4>
                <p className="text-gray-600 font-body">Просмотров в месяц</p>
              </div>

              <div className="text-center bg-gradient-to-br from-orange-50 to-red-50 p-8 rounded-2xl">
                <div className="w-16 h-16 bg-instagram-coral rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Award" size={32} className="text-white" />
                </div>
                <h4 className="text-3xl font-heading font-bold text-gray-900 mb-2">50+</h4>
                <p className="text-gray-600 font-body">Брендов-партнёров</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-pink-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h3 className="text-3xl font-heading font-bold text-gray-900 mb-4">
                Что для меня важно
              </h3>
              <p className="text-gray-600 font-body">
                Ценности, которые вдохновляют меня каждый день
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">🌸</div>
                <h4 className="text-xl font-heading font-semibold text-gray-900 mb-3">Подлинность</h4>
                <p className="text-gray-600 font-body">Быть собой — самое важное. Я делюсь только тем, что действительно люблю и во что верю.</p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">✨</div>
                <h4 className="text-xl font-heading font-semibold text-gray-900 mb-3">Красота</h4>
                <p className="text-gray-600 font-body">Красота во всём — в макияже, в интерьере, в отношениях, в моментах жизни.</p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">🤍</div>
                <h4 className="text-xl font-heading font-semibold text-gray-900 mb-3">Забота</h4>
                <p className="text-gray-600 font-body">О себе, о близких, о своём пространстве. Забота — это основа счастливой жизни.</p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">🌙</div>
                <h4 className="text-xl font-heading font-semibold text-gray-900 mb-3">Гармония</h4>
                <p className="text-gray-600 font-body">Баланс между работой и отдыхом, между активностью и спокойствием.</p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">💫</div>
                <h4 className="text-xl font-heading font-semibold text-gray-900 mb-3">Вдохновение</h4>
                <p className="text-gray-600 font-body">Искать и находить красоту каждый день, вдохновляться и вдохновлять других.</p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">🌱</div>
                <h4 className="text-xl font-heading font-semibold text-gray-900 mb-3">Рост</h4>
                <p className="text-gray-600 font-body">Постоянное развитие, изучение нового, работа над собой и своими мечтами.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-heading font-bold mb-4">
              Остаёмся на связи! 💕
            </h2>
            <p className="text-gray-300 font-body mb-8">
              Подписывайся на мои социальные сети, чтобы не пропустить новый контент
            </p>

            <div className="flex justify-center space-x-6 mb-8">
              <Button variant="ghost" size="lg" className="text-white hover:text-instagram-pink">
                <Icon name="Instagram" size={24} />
              </Button>
              <Button variant="ghost" size="lg" className="text-white hover:text-instagram-coral">
                <Icon name="Youtube" size={24} />
              </Button>
              <Button variant="ghost" size="lg" className="text-white hover:text-instagram-blue">
                <Icon name="Send" size={24} />
              </Button>
              <Button variant="ghost" size="lg" className="text-white hover:text-instagram-purple">
                <Icon name="Mail" size={24} />
              </Button>
            </div>

            <div className="border-t border-gray-800 pt-8">
              <p className="text-gray-400 font-body text-sm">
                © 2024 Аделина Арден. Все права защищены. Сделано с 💕 для вдохновенных девушек.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default About;