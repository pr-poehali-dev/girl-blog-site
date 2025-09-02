import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const BlogPost = () => {
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
              <a href="/about" className="font-body text-gray-600 hover:text-instagram-pink transition-colors">
                Обо мне
              </a>
              <a href="#" className="font-body text-instagram-pink font-semibold transition-colors">
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

      {/* Blog Post Content */}
      <article className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Back to Blog */}
            <div className="mb-8">
              <a href="/">
                <Button variant="ghost" className="text-instagram-pink hover:text-instagram-pink/80">
                  <Icon name="ArrowLeft" size={16} className="mr-2" />
                  Вернуться к блогу
                </Button>
              </a>
            </div>

            {/* Post Header */}
            <header className="text-center mb-12">
              <div className="flex justify-center items-center space-x-4 mb-6">
                <Badge className="bg-instagram-coral text-white">Beauty</Badge>
                <span className="text-gray-500 font-body">2 сентября 2024</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-6">
                🌸 Мой утренний ритуал красоты
              </h1>
              <p className="text-xl text-gray-600 font-body max-w-2xl mx-auto">
                Делюсь секретами идеального утра для сияющей кожи
              </p>
            </header>

            {/* Featured Image */}
            <div className="mb-12">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://cdn.poehali.dev/files/b0643783-4f05-4cf6-9b5c-ea528204e0bb.png" 
                  alt="Мой утренний ритуал красоты" 
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>

            {/* Post Content */}
            <div className="prose prose-lg max-w-none font-body">
              <p className="text-lg leading-relaxed text-gray-700 mb-8">
                Утро — это не только начало дня, но и настроение, с которым я его проживу. 
                Поэтому мои ритуалы красоты — это маленькие шаги к гармонии и сиянию.
              </p>

              <div className="space-y-6">
                <div className="bg-gradient-to-r from-pink-50 to-transparent p-6 rounded-xl border-l-4 border-instagram-pink">
                  <h3 className="text-xl font-heading font-semibold text-gray-900 mb-3 flex items-center">
                    <span className="mr-3">✨</span>
                    1. Стакан воды с лимоном
                  </h3>
                  <p className="text-gray-700">
                    Первое, что я делаю — пью воду. Это пробуждает организм и наполняет кожу свежестью.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-transparent p-6 rounded-xl border-l-4 border-instagram-blue">
                  <h3 className="text-xl font-heading font-semibold text-gray-900 mb-3 flex items-center">
                    <span className="mr-3">✨</span>
                    2. Умывание холодной водой
                  </h3>
                  <p className="text-gray-700">
                    Маленький контраст помогает проснуться и сделать кожу более упругой.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-purple-50 to-transparent p-6 rounded-xl border-l-4 border-instagram-purple">
                  <h3 className="text-xl font-heading font-semibold text-gray-900 mb-3 flex items-center">
                    <span className="mr-3">✨</span>
                    3. Лёгкий массаж лица
                  </h3>
                  <p className="text-gray-700">
                    Пара минут с роллером или просто пальцами — и кожа выглядит свежее, а мысли становятся яснее.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-orange-50 to-transparent p-6 rounded-xl border-l-4 border-instagram-coral">
                  <h3 className="text-xl font-heading font-semibold text-gray-900 mb-3 flex items-center">
                    <span className="mr-3">✨</span>
                    4. Увлажнение
                  </h3>
                  <p className="text-gray-700">
                    Сыворотка + крем — моя база на день. Иногда добавляю лёгкий SPF, если планирую прогулку.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-yellow-50 to-transparent p-6 rounded-xl border-l-4 border-yellow-400">
                  <h3 className="text-xl font-heading font-semibold text-gray-900 mb-3 flex items-center">
                    <span className="mr-3">✨</span>
                    5. Атмосфера
                  </h3>
                  <p className="text-gray-700">
                    Любимая музыка, аромат свечи или чашка кофе — создают настроение, которое отражается на лице лучше любого макияжа.
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-pink-50 to-orange-50 p-8 rounded-2xl mt-10 text-center">
                <h3 className="text-2xl font-heading font-semibold text-gray-900 mb-4">
                  💗 Мой главный секрет
                </h3>
                <p className="text-lg text-gray-700 italic">
                  Утренний уход — это не рутина, а маленький ритуал любви к себе
                </p>
              </div>

              <div className="bg-white border-2 border-instagram-pink/20 p-8 rounded-2xl mt-10">
                <div className="flex items-start space-x-4">
                  <span className="text-2xl">👉</span>
                  <div>
                    <h4 className="font-heading font-semibold text-gray-900 mb-2">
                      А какой утренний ритуал делает ваш день лучше?
                    </h4>
                    <p className="text-gray-600">
                      Поделитесь в комментариях — мне очень интересно узнать о ваших секретах красоты!
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Post Actions */}
            <div className="flex items-center justify-between mt-12 pt-8 border-t border-gray-200">
              <div className="flex items-center space-x-6">
                <button className="flex items-center space-x-2 text-gray-500 hover:text-instagram-pink transition-colors">
                  <Icon name="Heart" size={20} />
                  <span>127 нравится</span>
                </button>
                <button className="flex items-center space-x-2 text-gray-500 hover:text-instagram-pink transition-colors">
                  <Icon name="MessageCircle" size={20} />
                  <span>23 комментария</span>
                </button>
                <button className="flex items-center space-x-2 text-gray-500 hover:text-instagram-pink transition-colors">
                  <Icon name="Share" size={20} />
                  <span>Поделиться</span>
                </button>
              </div>
              
              <div className="flex items-center space-x-2">
                <Button variant="outline" size="sm">
                  <Icon name="Bookmark" size={16} />
                </Button>
              </div>
            </div>

            {/* Author Info */}
            <div className="bg-gradient-to-br from-pink-50 to-orange-50 p-8 rounded-2xl mt-12">
              <div className="flex items-start space-x-6">
                <div className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0">
                  <img 
                    src="https://cdn.poehali.dev/files/3322f803-e723-499e-84ff-4c3dc12bd9e4.png" 
                    alt="Аделина Арден" 
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-heading font-semibold text-gray-900 mb-2">
                    Аделина Арден
                  </h4>
                  <p className="text-gray-600 font-body mb-4">
                    Блоггер о красоте, моде и стиле жизни. Создаю контент о том, как находить красоту в повседневности и быть собой.
                  </p>
                  <Button className="bg-instagram-pink hover:bg-instagram-pink/90">
                    <Icon name="UserPlus" className="mr-2" size={16} />
                    Подписаться
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

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

export default BlogPost;