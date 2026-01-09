import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const navigation = [
    { id: 'home', label: 'Главная', icon: 'Home' },
    { id: 'matches', label: 'Матчи', icon: 'Trophy' },
    { id: 'team', label: 'Команда', icon: 'Users' },
    { id: 'history', label: 'История', icon: 'BookOpen' },
    { id: 'news', label: 'Новости', icon: 'Newspaper' },
    { id: 'transfers', label: 'Трансферы', icon: 'ArrowLeftRight' },
    { id: 'tickets', label: 'Билеты', icon: 'Ticket' },
    { id: 'shop', label: 'Магазин', icon: 'ShoppingBag' },
    { id: 'contacts', label: 'Контакты', icon: 'Mail' },
  ];

  const upcomingMatches = [
    {
      date: '15 января 2026',
      time: '19:30',
      opponent: 'Зенит',
      location: 'Стадион Открытие Арена',
      championship: 'РПЛ',
      home: true,
    },
    {
      date: '22 января 2026',
      time: '16:00',
      opponent: 'ЦСКА',
      location: 'ВЭБ Арена',
      championship: 'РПЛ',
      home: false,
    },
    {
      date: '29 января 2026',
      time: '19:30',
      opponent: 'Локомотив',
      location: 'Стадион Открытие Арена',
      championship: 'РПЛ',
      home: true,
    },
  ];

  const latestNews = [
    {
      title: 'Спартак готовится к матчу с Зенитом',
      date: '9 января 2026',
      category: 'Команда',
      excerpt: 'Красно-белые провели тренировку в полном составе перед важнейшим матчем чемпионата',
    },
    {
      title: 'Интервью капитана команды',
      date: '8 января 2026',
      category: 'Интервью',
      excerpt: 'Капитан команды рассказал о подготовке к весенней части сезона и целях на 2026 год',
    },
    {
      title: 'Молодежная команда одержала победу',
      date: '7 января 2026',
      category: 'Молодежка',
      excerpt: 'Молодежный состав Спартака разгромил соперника со счетом 4:1 в матче первенства',
    },
  ];

  const transfers = [
    {
      player: 'Иван Петров',
      position: 'Нападающий',
      type: 'Переход',
      from: 'Краснодар',
      to: 'Спартак',
      fee: '€12М',
      contract: '2026-2030',
      status: 'completed',
      date: '5 января 2026',
    },
    {
      player: 'Александр Сидоров',
      position: 'Полузащитник',
      type: 'Аренда',
      from: 'Спартак',
      to: 'Сочи',
      fee: 'Аренда',
      contract: 'до 30.06.2026',
      status: 'completed',
      date: '3 января 2026',
    },
    {
      player: 'Михаил Кузнецов',
      position: 'Защитник',
      type: 'Слух',
      from: 'Рубин',
      to: 'Спартак',
      fee: '€8М',
      contract: '2026-2029',
      status: 'rumor',
      date: '8 января 2026',
    },
  ];

  const renderHome = () => (
    <div className="space-y-12">
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-primary to-red-700">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative z-10 text-center text-white space-y-6 px-4">
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight">
            СПАРТАК
          </h1>
          <p className="text-2xl md:text-3xl font-semibold">Народная команда</p>
          <p className="text-lg md:text-xl opacity-90">Основан в 1922 году</p>
          <div className="flex gap-4 justify-center mt-8">
            <Button size="lg" variant="secondary" className="font-semibold">
              Купить билеты
            </Button>
            <Button size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 text-white border-white font-semibold">
              Стать болельщиком
            </Button>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8">Ближайшие матчи</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {upcomingMatches.map((match, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Badge className="w-fit mb-2 bg-primary">{match.championship}</Badge>
                <CardTitle className="text-2xl">
                  {match.home ? 'Спартак' : match.opponent} vs {match.home ? match.opponent : 'Спартак'}
                </CardTitle>
                <CardDescription className="text-base">
                  {match.date} • {match.time}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Icon name="MapPin" size={16} />
                  <span>{match.location}</span>
                </div>
                <Button className="w-full mt-4" variant={match.home ? 'default' : 'outline'}>
                  {match.home ? 'Купить билеты' : 'Подробнее'}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8">Последние новости</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {latestNews.map((news, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <Badge variant="secondary" className="w-fit mb-2">{news.category}</Badge>
                <CardTitle className="text-xl">{news.title}</CardTitle>
                <CardDescription>{news.date}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{news.excerpt}</p>
                <Button variant="link" className="px-0 mt-2">
                  Читать далее →
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );

  const renderTransfers = () => (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-8">
        <h1 className="text-5xl font-bold mb-4">Трансферы</h1>
        <p className="text-xl text-muted-foreground">Переходы, контракты и слухи о трансферах</p>
      </div>

      <div className="space-y-4">
        {transfers.map((transfer, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row md:items-center gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-2xl font-bold">{transfer.player}</h3>
                    <Badge 
                      variant={transfer.status === 'completed' ? 'default' : 'secondary'}
                      className={transfer.status === 'completed' ? 'bg-green-600' : ''}
                    >
                      {transfer.status === 'completed' ? 'Завершен' : 'Слух'}
                    </Badge>
                  </div>
                  <p className="text-muted-foreground mb-4">{transfer.position}</p>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-center gap-2">
                      <Icon name="ArrowRight" className="text-primary" size={20} />
                      <div>
                        <p className="text-sm text-muted-foreground">Откуда</p>
                        <p className="font-semibold">{transfer.from}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <Icon name="ArrowRight" className="text-primary" size={20} />
                      <div>
                        <p className="text-sm text-muted-foreground">Куда</p>
                        <p className="font-semibold">{transfer.to}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <Icon name="Banknote" className="text-accent" size={20} />
                      <div>
                        <p className="text-sm text-muted-foreground">Сумма</p>
                        <p className="font-semibold">{transfer.fee}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <Icon name="FileText" className="text-accent" size={20} />
                      <div>
                        <p className="text-sm text-muted-foreground">Контракт</p>
                        <p className="font-semibold">{transfer.contract}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col items-end gap-2">
                  <Badge variant="outline">{transfer.type}</Badge>
                  <p className="text-sm text-muted-foreground">{transfer.date}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="mt-8 bg-secondary/30">
        <CardContent className="p-6">
          <div className="flex items-start gap-4">
            <Icon name="Info" className="text-primary mt-1" size={24} />
            <div>
              <h3 className="font-bold text-lg mb-2">О трансферах</h3>
              <p className="text-muted-foreground">
                Здесь публикуется информация о всех официальных переходах игроков, а также проверенные слухи от надежных источников. 
                Статус "Завершен" означает официальное подтверждение клубом.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderSection = () => {
    switch (activeSection) {
      case 'home':
        return renderHome();
      case 'transfers':
        return renderTransfers();
      default:
        return (
          <div className="container mx-auto px-4 py-24 text-center">
            <Icon name="Construction" size={64} className="mx-auto mb-6 text-muted-foreground" />
            <h2 className="text-4xl font-bold mb-4">Раздел в разработке</h2>
            <p className="text-xl text-muted-foreground">
              Этот раздел скоро будет доступен
            </p>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 bg-white border-b shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl">
                С
              </div>
              <div>
                <h1 className="text-2xl font-bold">СПАРТАК</h1>
                <p className="text-xs text-muted-foreground">Москва</p>
              </div>
            </div>

            <nav className="hidden lg:flex items-center gap-1">
              {navigation.map((item) => (
                <Button
                  key={item.id}
                  variant={activeSection === item.id ? 'default' : 'ghost'}
                  onClick={() => setActiveSection(item.id)}
                  className="gap-2"
                >
                  <Icon name={item.icon as any} size={18} />
                  {item.label}
                </Button>
              ))}
            </nav>

            <Button className="lg:hidden" variant="outline" size="icon">
              <Icon name="Menu" size={24} />
            </Button>
          </div>
        </div>
      </header>

      <main>{renderSection()}</main>

      <footer className="bg-black text-white py-12 mt-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">ФК Спартак</h3>
              <p className="text-gray-400">
                Профессиональный футбольный клуб, основанный в 1922 году. Народная команда России.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Клуб</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition">О клубе</a></li>
                <li><a href="#" className="hover:text-white transition">История</a></li>
                <li><a href="#" className="hover:text-white transition">Трофеи</a></li>
                <li><a href="#" className="hover:text-white transition">Академия</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Болельщикам</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition">Билеты</a></li>
                <li><a href="#" className="hover:text-white transition">Магазин</a></li>
                <li><a href="#" className="hover:text-white transition">Карта болельщика</a></li>
                <li><a href="#" className="hover:text-white transition">Фан-зона</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center gap-2">
                  <Icon name="MapPin" size={16} />
                  Москва, Открытие Арена
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  +7 (495) 737-73-37
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  info@spartak.com
                </li>
              </ul>
            </div>
          </div>
          
          <Separator className="my-8 bg-gray-800" />
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2026 ФК Спартак Москва. Все права защищены.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-white transition">
                <Icon name="Facebook" size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <Icon name="Twitter" size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <Icon name="Instagram" size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <Icon name="Youtube" size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
