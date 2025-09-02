import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "🌸 Мой утренний ритуал красоты",
      image: "https://cdn.poehali.dev/files/b0643783-4f05-4cf6-9b5c-ea528204e0bb.png",
      excerpt: "Делюсь секретами идеального утра для сияющей кожи",
      date: "2024-09-02",
      category: "Beauty",
      slug: "/blog/morning-beauty-ritual"
    },
    {
      id: 2,
      title: "Осенние тренды 2024",
      image: "/img/f6b87efe-0999-4315-a9f5-e614049ceed9.jpg",
      excerpt: "Что носить этой осенью: мой гид по модным трендам",
      date: "2024-08-28",
      category: "Fashion",
      slug: "#"
    },
    {
      id: 3,
      title: "Минимализм в гардеробе",
      image: "/img/a0720cee-2244-4724-b488-b17892f0eb78.jpg",
      excerpt: "Как создать капсульный гардероб из 30 вещей",
      date: "2024-08-25",
      category: "Lifestyle",
      slug: "#"
    }
  ];

  const categories = ["Все", "Beauty", "Fashion", "Lifestyle"];
  const selectedCategory = "Все";

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
              <a href="/blog" className="font-body text-instagram-pink font-semibold transition-colors">
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

      {/* Blog Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-pink-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-6">
              ✨ Мой блог
            </h1>
            <p className="text-xl text-gray-600 font-body max-w-2xl mx-auto">
              Делюсь своими мыслями о красоте, моде, стиле жизни и всём, что меня вдохновляет. 
              Здесь только искренность и полезные советы 💕
            </p>
          </div>
        </div>
      </section>

      {/* Filter Categories */}
      <section className="py-8 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex justify-center space-x-4 overflow-x-auto pb-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  className={
                    selectedCategory === category
                      ? "bg-instagram-pink hover:bg-instagram-pink/90"
                      : "border-instagram-pink text-instagram-pink hover:bg-instagram-pink hover:text-white"
                  }
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <Card key={post.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer group">
                  <a href={post.slug} className="block">
                    <div className="aspect-square overflow-hidden">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <Badge 
                          variant="secondary" 
                          className={`${
                            post.category === 'Beauty' ? 'bg-instagram-coral/10 text-instagram-coral' :
                            post.category === 'Fashion' ? 'bg-instagram-pink/10 text-instagram-pink' :
                            'bg-instagram-blue/10 text-instagram-blue'
                          }`}
                        >
                          {post.category}
                        </Badge>
                        <span className="text-sm text-gray-500 font-body">
                          {new Date(post.date).toLocaleDateString('ru')}
                        </span>
                      </div>
                      <h3 className="text-xl font-heading font-semibold text-gray-900 mb-3 line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 font-body text-sm mb-4 line-clamp-2">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                        <div className="flex items-center space-x-4 text-gray-500">
                          <span className="flex items-center space-x-1 text-sm">
                            <Icon name="Heart" size={16} />
                            <span>{post.id === 1 ? '127' : '42'}</span>
                          </span>
                          <span className="flex items-center space-x-1 text-sm">
                            <Icon name="MessageCircle" size={16} />
                            <span>{post.id === 1 ? '23' : '8'}</span>
                          </span>
                        </div>
                        <Button variant="ghost" size="sm" className="text-instagram-pink hover:text-instagram-pink/80">
                          Читать
                          <Icon name="ArrowRight" size={16} className="ml-1" />
                        </Button>
                      </div>
                    </CardContent>
                  </a>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gradient-to-br from-pink-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-heading font-bold text-gray-900 mb-4">
              Не пропускай новые посты! 💕
            </h2>
            <p className="text-gray-600 font-body mb-8 max-w-2xl mx-auto">
              Подписывайся на мои социальные сети, чтобы первой узнавать о новых постах, 
              секретах красоты и модных находках
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-instagram-pink hover:bg-instagram-pink/90">
                <Icon name="Instagram" className="mr-2" size={20} />
                Подписаться в Instagram
              </Button>
              <Button size="lg" variant="outline" className="border-instagram-coral text-instagram-coral hover:bg-instagram-coral hover:text-white">
                <Icon name="Youtube" className="mr-2" size={20} />
                YouTube канал
              </Button>
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

export default Blog;