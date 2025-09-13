import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

export default function Index() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-sm border-b border-gray-800">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-tiktok-pink to-tiktok-cyan rounded-lg flex items-center justify-center">
              <Icon name="Music" size={20} className="text-white" />
            </div>
            <span className="text-2xl font-bold text-gradient-tiktok">TikTok</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="hover:text-tiktok-pink transition-colors">Главная</a>
            <a href="#features" className="hover:text-tiktok-pink transition-colors">Возможности</a>
            <a href="#download" className="hover:text-tiktok-pink transition-colors">Скачать</a>
          </div>
          
          <Button className="bg-gradient-to-r from-tiktok-pink to-tiktok-cyan hover:opacity-90 transition-opacity">
            Войти
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-16 px-4">
        <div className="container mx-auto text-center">
          <div className="animate-fade-in">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
              <span className="text-gradient-tiktok">Создавай.</span><br />
              <span className="text-white">Вдохновляй.</span><br />
              <span className="text-gradient-tiktok">Развивайся.</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
              Присоединяйся к миллиардам создателей контента. Делись своими талантами, 
              открывай новые тренды и находи единомышленников со всего мира.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-tiktok-pink to-tiktok-cyan hover:opacity-90 transition-all hover-scale text-lg px-8 py-4 animate-pulse-glow"
              >
                <Icon name="Download" size={20} className="mr-2" />
                Скачать приложение
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="border-tiktok-cyan text-tiktok-cyan hover:bg-tiktok-cyan hover:text-black transition-all hover-scale text-lg px-8 py-4"
              >
                <Icon name="Play" size={20} className="mr-2" />
                Смотреть трейлер
              </Button>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="relative animate-scale-in">
            <div className="absolute inset-0 bg-gradient-to-r from-tiktok-pink/20 to-tiktok-cyan/20 rounded-3xl blur-3xl"></div>
            <img 
              src="/img/a34ca1fb-3c41-4379-bc34-4166d8d24620.jpg" 
              alt="TikTok Mobile App" 
              className="relative mx-auto rounded-3xl shadow-2xl max-w-2xl w-full hover-scale"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 bg-gradient-to-b from-tiktok-gray to-black">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-gradient-tiktok">Возможности</span> без границ
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Богатая библиотека фильтров и спецэффектов превратит любой момент в шедевр
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="bg-gray-900 border-gray-800 hover:border-tiktok-pink transition-all hover-scale group">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-tiktok-pink to-tiktok-cyan rounded-full flex items-center justify-center mx-auto mb-6 group-hover:animate-pulse-glow">
                  <Icon name="Sparkles" size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gradient-tiktok">AR Эффекты</h3>
                <p className="text-gray-400">
                  Дополненная реальность с тысячами интерактивных фильтров и масок
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-gray-900 border-gray-800 hover:border-tiktok-cyan transition-all hover-scale group">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-tiktok-cyan to-tiktok-pink rounded-full flex items-center justify-center mx-auto mb-6 group-hover:animate-pulse-glow">
                  <Icon name="Palette" size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gradient-tiktok">Фильтры красоты</h3>
                <p className="text-gray-400">
                  Умные алгоритмы для естественного улучшения внешности
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-gray-900 border-gray-800 hover:border-tiktok-pink transition-all hover-scale group">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-tiktok-pink to-tiktok-cyan rounded-full flex items-center justify-center mx-auto mb-6 group-hover:animate-pulse-glow">
                  <Icon name="Wand2" size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gradient-tiktok">Видеомагия</h3>
                <p className="text-gray-400">
                  Продвинутые инструменты монтажа и спецэффектов для профессионального результата
                </p>
              </CardContent>
            </Card>
          </div>
          
          {/* Features Showcase */}
          <div className="text-center animate-scale-in">
            <img 
              src="/img/0e649e88-ab98-4a1b-879b-610c9d0d581f.jpg" 
              alt="TikTok Filters Interface" 
              className="mx-auto rounded-3xl shadow-2xl max-w-4xl w-full hover-scale"
            />
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="animate-fade-in">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Скачай <span className="text-gradient-tiktok">сейчас</span>
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
              Доступно на всех платформах. Начни создавать вирусный контент уже сегодня!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <Button 
                size="lg" 
                className="bg-black border border-gray-600 hover:bg-gray-900 transition-all hover-scale text-lg px-8 py-4 flex items-center"
              >
                <Icon name="Apple" size={24} className="mr-3" />
                <div className="text-left">
                  <div className="text-xs text-gray-400">Скачать в</div>
                  <div className="text-lg font-semibold">App Store</div>
                </div>
              </Button>
              
              <Button 
                size="lg" 
                className="bg-black border border-gray-600 hover:bg-gray-900 transition-all hover-scale text-lg px-8 py-4 flex items-center"
              >
                <Icon name="Play" size={24} className="mr-3" />
                <div className="text-left">
                  <div className="text-xs text-gray-400">Доступно в</div>
                  <div className="text-lg font-semibold">Google Play</div>
                </div>
              </Button>
            </div>
            
            {/* Stats */}
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="animate-scale-in">
                <div className="text-4xl font-bold text-gradient-tiktok mb-2">1.5B+</div>
                <div className="text-gray-400">Активных пользователей</div>
              </div>
              <div className="animate-scale-in">
                <div className="text-4xl font-bold text-gradient-tiktok mb-2">100M+</div>
                <div className="text-gray-400">Видео в день</div>
              </div>
              <div className="animate-scale-in">
                <div className="text-4xl font-bold text-gradient-tiktok mb-2">150+</div>
                <div className="text-gray-400">Стран мира</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-gray-800">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <div className="w-8 h-8 bg-gradient-to-r from-tiktok-pink to-tiktok-cyan rounded-lg flex items-center justify-center">
              <Icon name="Music" size={20} className="text-white" />
            </div>
            <span className="text-2xl font-bold text-gradient-tiktok">TikTok</span>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8 mb-8 text-gray-400">
            <a href="#" className="hover:text-tiktok-pink transition-colors">О нас</a>
            <a href="#" className="hover:text-tiktok-pink transition-colors">Карьера</a>
            <a href="#" className="hover:text-tiktok-pink transition-colors">Новости</a>
            <a href="#" className="hover:text-tiktok-pink transition-colors">Контакты</a>
            <a href="#" className="hover:text-tiktok-pink transition-colors">Поддержка</a>
            <a href="#" className="hover:text-tiktok-pink transition-colors">Безопасность</a>
          </div>
          
          <div className="flex justify-center space-x-6 mb-8">
            <Icon name="Twitter" size={24} className="text-gray-400 hover:text-tiktok-cyan cursor-pointer transition-colors hover-scale" />
            <Icon name="Instagram" size={24} className="text-gray-400 hover:text-tiktok-pink cursor-pointer transition-colors hover-scale" />
            <Icon name="Youtube" size={24} className="text-gray-400 hover:text-tiktok-cyan cursor-pointer transition-colors hover-scale" />
            <Icon name="Facebook" size={24} className="text-gray-400 hover:text-tiktok-pink cursor-pointer transition-colors hover-scale" />
          </div>
          
          <div className="text-gray-500 text-sm">
            © 2024 TikTok. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
}