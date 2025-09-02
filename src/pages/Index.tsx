import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const blogPosts = [
    {
      id: 1,
      title: "Мой утренний ритуал красоты",
      image: "/img/661a7668-4de7-4af6-bdad-296502e96e28.jpg",
      excerpt: "Делюсь секретами идеального утра для сияющей кожи",
      date: "2024-09-01",
      category: "Beauty"
    },
    {
      id: 2,
      title: "Осенние тренды 2024",
      image: "/img/f6b87efe-0999-4315-a9f5-e614049ceed9.jpg",
      excerpt: "Что носить этой осенью: мой гид по модным трендам",
      date: "2024-08-28",
      category: "Fashion"
    },
    {
      id: 3,
      title: "Минимализм в гардеробе",
      image: "/img/a0720cee-2244-4724-b488-b17892f0eb78.jpg",
      excerpt: "Как создать капсульный гардероб из 30 вещей",
      date: "2024-08-25",
      category: "Lifestyle"
    }
  ];

  const galleryImages = [
    "/img/661a7668-4de7-4af6-bdad-296502e96e28.jpg",
    "/img/f6b87efe-0999-4315-a9f5-e614049ceed9.jpg",
    "/img/a0720cee-2244-4724-b488-b17892f0eb78.jpg",
    "/img/661a7668-4de7-4af6-bdad-296502e96e28.jpg",
    "/img/f6b87efe-0999-4315-a9f5-e614049ceed9.jpg",
    "/img/a0720cee-2244-4724-b488-b17892f0eb78.jpg",
  ];

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
              {[
                { id: 'home', label: 'Главная' },
                { id: 'about', label: 'Обо мне' },
                { id: 'blog', label: 'Блог' },
                { id: 'gallery', label: 'Фото' },
                { id: 'contacts', label: 'Контакты' },
                { id: 'collab', label: 'Сотрудничество' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  className={`font-body transition-colors ${
                    activeSection === item.id
                      ? 'text-instagram-pink font-semibold'
                      : 'text-gray-600 hover:text-instagram-pink'
                  }`}
                >
                  {item.label}
                </button>
              ))}
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

      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-pink-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8 relative">
              <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-white shadow-xl">
                <img 
                  src="https://cdn.poehali.dev/files/524dbb6a-f836-449e-b936-e0fa4d6cd94c.png" 
                  alt="Аделина Арден" 
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-instagram-pink text-white">✨ Блоггер</Badge>
              </div>
            </div>
            
            <h1 className="text-5xl font-heading font-bold text-gray-900 mb-4">
              Привет! Я <span className="bg-gradient-to-r from-instagram-pink to-instagram-coral bg-clip-text text-transparent">Аделина</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 font-body max-w-2xl mx-auto">
              Делюсь своей жизнью, модными находками и секретами красоты. 
              Присоединяйся к моему сообществу вдохновленных девушек! 💕
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-instagram-pink hover:bg-instagram-pink/90">
                <Icon name="Instagram" className="mr-2" size={20} />
                Подписаться
              </Button>
              <Button size="lg" variant="outline" className="border-instagram-coral text-instagram-coral hover:bg-instagram-coral hover:text-white">
                Сотрудничество
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold text-gray-900 mb-4">
              Последние посты
            </h2>
            <p className="text-gray-600 font-body">
              Свежие идеи и вдохновение каждую неделю
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {blogPosts.map((post) => (
              <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer group">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="secondary" className="bg-instagram-coral/10 text-instagram-coral">
                      {post.category}
                    </Badge>
                    <span className="text-sm text-gray-500 font-body">
                      {new Date(post.date).toLocaleDateString('ru')}
                    </span>
                  </div>
                  <h3 className="text-xl font-heading font-semibold text-gray-900 mb-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 font-body text-sm">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center mt-4 space-x-4 text-gray-500">
                    <button className="flex items-center space-x-1 hover:text-instagram-pink transition-colors">
                      <Icon name="Heart" size={16} />
                      <span className="text-sm">42</span>
                    </button>
                    <button className="flex items-center space-x-1 hover:text-instagram-pink transition-colors">
                      <Icon name="MessageCircle" size={16} />
                      <span className="text-sm">8</span>
                    </button>
                    <button className="flex items-center space-x-1 hover:text-instagram-pink transition-colors">
                      <Icon name="Share" size={16} />
                    </button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg" className="border-instagram-pink text-instagram-pink hover:bg-instagram-pink hover:text-white">
              Смотреть все посты
              <Icon name="ArrowRight" className="ml-2" size={20} />
            </Button>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold text-gray-900 mb-4">
              Фотогалерея
            </h2>
            <p className="text-gray-600 font-body">
              Моменты моей жизни в Instagram стиле
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {galleryImages.map((image, index) => (
              <div key={index} className="aspect-square overflow-hidden rounded-lg cursor-pointer group">
                <img 
                  src={image} 
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button className="bg-instagram-blue hover:bg-instagram-blue/90">
              <Icon name="Instagram" className="mr-2" size={20} />
              Смотреть в Instagram
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6">
                  Обо мне
                </h2>
                <div className="space-y-4 font-body text-gray-600">
                  <p>
                    Привет! Меня зовут Аделина Арден, и я создаю контент о красоте, моде и стиле жизни уже более 3 лет. 
                    Моя миссия — вдохновлять девушек быть собой и находить красоту в повседневности.
                  </p>
                  <p>
                    Я верю, что каждая из нас уникальна, и мой блог — это пространство, где мы можем делиться 
                    опытом, поддерживать друг друга и расти вместе.
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 mt-6">
                  {['Fashion', 'Beauty', 'Lifestyle', 'Travel', 'Self-care'].map((tag) => (
                    <Badge key={tag} variant="outline" className="border-instagram-coral text-instagram-coral">
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

              <div className="space-y-6">
                <div className="bg-gradient-to-br from-pink-50 to-orange-50 p-6 rounded-xl">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-instagram-pink rounded-full flex items-center justify-center">
                      <Icon name="Users" size={24} className="text-white" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-gray-900">125K+</h3>
                      <p className="text-gray-600 font-body text-sm">Подписчиков</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-xl">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-instagram-blue rounded-full flex items-center justify-center">
                      <Icon name="TrendingUp" size={24} className="text-white" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-gray-900">2M+</h3>
                      <p className="text-gray-600 font-body text-sm">Просмотров в месяц</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-xl">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-instagram-coral rounded-full flex items-center justify-center">
                      <Icon name="Award" size={24} className="text-white" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-gray-900">50+</h3>
                      <p className="text-gray-600 font-body text-sm">Брендов-партнеров</p>
                    </div>
                  </div>
                </div>
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
                © 2024 Анна Блог. Все права защищены. Сделано с 💕 для вдохновенных девушек.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;