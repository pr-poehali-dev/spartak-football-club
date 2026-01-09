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

  const allMatches = [
    { date: '15 января 2026', time: '19:30', opponent: 'Зенит', location: 'Лукойл Арена', championship: 'РПЛ', home: true, score: null },
    { date: '22 января 2026', time: '16:00', opponent: 'ЦСКА', location: 'ВЭБ Арена', championship: 'РПЛ', home: false, score: null },
    { date: '29 января 2026', time: '19:30', opponent: 'Локомотив', location: 'Лукойл Арена', championship: 'РПЛ', home: true, score: null },
    { date: '5 февраля 2026', time: '16:00', opponent: 'Краснодар', location: 'Стадион Краснодар', championship: 'РПЛ', home: false, score: null },
    { date: '12 февраля 2026', time: '19:30', opponent: 'Динамо', location: 'Лукойл Арена', championship: 'РПЛ', home: true, score: null },
    { date: '19 февраля 2026', time: '14:00', opponent: 'Сочи', location: 'Фишт', championship: 'РПЛ', home: false, score: null },
    { date: '26 февраля 2026', time: '19:30', opponent: 'Ростов', location: 'Лукойл Арена', championship: 'РПЛ', home: true, score: null },
    { date: '5 марта 2026', time: '16:00', opponent: 'Рубин', location: 'Ак Барс Арена', championship: 'РПЛ', home: false, score: null },
    { date: '28 декабря 2025', time: '16:00', opponent: 'Урал', location: 'Екатеринбург Арена', championship: 'РПЛ', home: false, score: '2:1' },
    { date: '21 декабря 2025', time: '19:30', opponent: 'Ахмат', location: 'Лукойл Арена', championship: 'РПЛ', home: true, score: '3:0' },
    { date: '14 декабря 2025', time: '14:00', opponent: 'Оренбург', location: 'Газовик', championship: 'РПЛ', home: false, score: '1:1' },
  ];

  const upcomingMatches = allMatches.filter(m => !m.score).slice(0, 3);

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

  const players = [
    { number: 1, name: 'Александр Максименко', position: 'Вратарь', age: 26, nationality: '🇷🇺' },
    { number: 98, name: 'Александр Селихов', position: 'Вратарь', age: 30, nationality: '🇷🇺' },
    { number: 2, name: 'Срджан Бабич', position: 'Защитник', age: 28, nationality: '🇷🇸' },
    { number: 3, name: 'Александр Коковин', position: 'Защитник', age: 26, nationality: '🇷🇺' },
    { number: 4, name: 'Николай Рассказов', position: 'Защитник', age: 29, nationality: '🇷🇺' },
    { number: 14, name: 'Роман Евгеньев', position: 'Защитник', age: 31, nationality: '🇷🇺' },
    { number: 22, name: 'Дмитрий Чистяков', position: 'Защитник', age: 24, nationality: '🇷🇺' },
    { number: 5, name: 'Кристофер Мартинс', position: 'Полузащитник', age: 27, nationality: '🇱🇺' },
    { number: 6, name: 'Роман Зобнин', position: 'Полузащитник', age: 30, nationality: '🇷🇺' },
    { number: 7, name: 'Даниил Денисов', position: 'Полузащитник', age: 22, nationality: '🇷🇺' },
    { number: 8, name: 'Теофилюс Фоман', position: 'Полузащитник', age: 23, nationality: '🇬🇭' },
    { number: 10, name: 'Квинси Промес', position: 'Полузащитник', age: 32, nationality: '🇳🇱' },
    { number: 19, name: 'Александр Соболев', position: 'Нападающий', age: 27, nationality: '🇷🇺' },
    { number: 9, name: 'Манфред Угальде', position: 'Нападающий', age: 22, nationality: '🇨🇷' },
    { number: 11, name: 'Шарль Кабор', position: 'Нападающий', age: 28, nationality: '🇧🇫' },
  ];

  const shopItems = [
    { id: 1, name: 'Домашняя футболка 2025/26', price: 5990, category: 'Одежда', image: '👕' },
    { id: 2, name: 'Гостевая футболка 2025/26', price: 5990, category: 'Одежда', image: '👕' },
    { id: 3, name: 'Кружка с логотипом', price: 890, category: 'Сувениры', image: '☕' },
    { id: 4, name: 'Шарф болельщика', price: 1490, category: 'Аксессуары', image: '🧣' },
    { id: 5, name: 'Календарь 2026', price: 490, category: 'Сувениры', image: '📅' },
    { id: 6, name: 'Кепка красно-белая', price: 1290, category: 'Аксессуары', image: '🧢' },
    { id: 7, name: 'Флаг 90x135 см', price: 990, category: 'Атрибутика', image: '🚩' },
    { id: 8, name: 'Магнит с эмблемой', price: 290, category: 'Сувениры', image: '🧲' },
    { id: 9, name: 'Спортивная куртка', price: 7990, category: 'Одежда', image: '🧥' },
    { id: 10, name: 'Брелок в виде мяча', price: 390, category: 'Сувениры', image: '⚽' },
    { id: 11, name: 'Постер А2 с командой', price: 690, category: 'Сувениры', image: '🖼️' },
    { id: 12, name: 'Рюкзак красно-белый', price: 3490, category: 'Аксессуары', image: '🎒' },
  ];

  const transfers = [
    { player: 'Иван Петров', position: 'Нападающий', type: 'Переход', from: 'Краснодар', to: 'Спартак', fee: '€12М', contract: '2026-2030', status: 'completed', date: '5 января 2026' },
    { player: 'Александр Сидоров', position: 'Полузащитник', type: 'Аренда', from: 'Спартак', to: 'Сочи', fee: 'Аренда', contract: 'до 30.06.2026', status: 'completed', date: '3 января 2026' },
    { player: 'Михаил Кузнецов', position: 'Защитник', type: 'Слух', from: 'Рубин', to: 'Спартак', fee: '€8М', contract: '2026-2029', status: 'rumor', date: '8 января 2026' },
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

  const renderMatches = () => (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-5xl font-bold mb-8">Календарь матчей</h1>
      
      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Предстоящие матчи</h2>
        <div className="space-y-4">
          {allMatches.filter(m => !m.score).map((match, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex-1">
                    <Badge className="mb-2 bg-primary">{match.championship}</Badge>
                    <h3 className="text-2xl font-bold mb-2">
                      {match.home ? 'Спартак' : match.opponent} vs {match.home ? match.opponent : 'Спартак'}
                    </h3>
                    <div className="flex items-center gap-4 text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Icon name="Calendar" size={16} />
                        <span>{match.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Icon name="Clock" size={16} />
                        <span>{match.time}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Icon name="MapPin" size={16} />
                        <span>{match.location}</span>
                      </div>
                    </div>
                  </div>
                  {match.home && (
                    <Button>Купить билеты</Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-3xl font-bold mb-6">Прошедшие матчи</h2>
        <div className="space-y-4">
          {allMatches.filter(m => m.score).map((match, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex-1">
                    <Badge variant="secondary" className="mb-2">{match.championship}</Badge>
                    <h3 className="text-2xl font-bold mb-2">
                      {match.home ? 'Спартак' : match.opponent} vs {match.home ? match.opponent : 'Спартак'}
                    </h3>
                    <div className="flex items-center gap-4 text-muted-foreground text-sm">
                      <span>{match.date}</span>
                      <span>•</span>
                      <span>{match.location}</span>
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-primary">
                    {match.score}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );

  const renderTeam = () => (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-5xl font-bold mb-8">Состав команды</h1>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {players.map((player) => (
          <Card key={player.number} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-xl">{player.name}</CardTitle>
                  <CardDescription className="text-base mt-1">
                    {player.position}
                  </CardDescription>
                </div>
                <div className="text-4xl font-bold text-primary">
                  {player.number}
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex gap-4 text-sm text-muted-foreground">
                <div>
                  <span className="font-semibold">Возраст:</span> {player.age}
                </div>
                <div>
                  <span className="font-semibold">Страна:</span> {player.nationality}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );

  const renderHistory = () => (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-5xl font-bold mb-8">История клуба</h1>
      
      <div className="space-y-8 max-w-4xl">
        <Card>
          <CardContent className="p-8">
            <h2 className="text-3xl font-bold mb-6">Основание</h2>
            <p className="text-lg leading-relaxed mb-4">
              Футбольный клуб «Спартак» из Москвы основан 18 апреля 1922 года под названием «Московский клуб спорта» (МКС). 
              История клуба берёт своё начало от Русского гимнастического общества (РГО «Сокол»), которое было основано 4 (16) мая 1883 года.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              Инициаторами создания команды были братья Старостины (Андрей, Пётр, Александр) во главе со старшим — Николаем. 
              Ранее четыре брата, игравшие в футбол, состояли в «Соколе», которое было признано советскими властями «буржуазным пережитком» 
              и подверглось реформированию. По сути, именно из «Сокола» возникла команда, которая в дальнейшем стала «Спартаком».
            </p>
            <p className="text-lg leading-relaxed">
              С 1922 по 1934 год клуб носил следующие названия: 1922–1923 годы — МКС; 1923–1925 годы — «Красная Пресня»; 
              1926–1931 годы — «Пищевики»; 1931 год, 1934 год — «Промкооперация»; 1932–1933 годы — «Дукат»; 1934 — «Спартак».
            </p>
            <p className="text-lg leading-relaxed mt-4">
              Название «Спартак» придумал Николай Старостин, по официальной версии — вдохновившись названием одноимённой книги 
              итальянского писателя Рафаэля Джованьоли о судьбе римского гладиатора.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-8">
            <h2 className="text-3xl font-bold mb-6">Советский период</h2>
            <p className="text-lg leading-relaxed mb-4">
              Первый матч «Спартак» провёл 12 апреля 1935 года, разгромив «Трёхгорку» со счётом 7:1.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              В 1936 году был образован чемпионат СССР по футболу, и «Спартак» начал выступать в нём. 
              В весеннем чемпионате команда заняла третье место, в осеннем — стала чемпионом.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              В первые послевоенные годы «Спартак» дважды выигрывал Кубок Советского Союза.
            </p>
            <p className="text-lg leading-relaxed">
              В 1966 году «Спартак» впервые выступил в еврокубках.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-8">
            <h2 className="text-3xl font-bold mb-6">Российский период</h2>
            <p className="text-lg leading-relaxed mb-4">
              После распада Советского Союза чемпионат СССР прекратил своё существование. 
              В недавно созданной российской лиге «Спартак» доминировал и выиграл все титулы, кроме одного, в период с 1992 по 2001 год.
            </p>
            <p className="text-lg leading-relaxed">
              В 2017 году «Спартак» завоевал свой десятый титул чемпиона России.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-primary text-white">
          <CardContent className="p-8">
            <h2 className="text-3xl font-bold mb-6">Достижения</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <div className="text-4xl font-bold mb-2">12x</div>
                <p className="text-lg">Чемпион СССР</p>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">10x</div>
                <p className="text-lg">Чемпион России</p>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">10x</div>
                <p className="text-lg">Обладатель Кубка СССР</p>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">4x</div>
                <p className="text-lg">Обладатель Кубка России</p>
              </div>
            </div>
            <Separator className="my-6 bg-white/20" />
            <p className="text-lg">
              Обладатель Суперкубка России. Полуфиналист трёх главных клубных европейских турниров 
              (Кубка европейских чемпионов, Кубка обладателей кубков и Кубка УЕФА).
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );

  const renderShop = () => (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-5xl font-bold mb-4">Магазин Спартака</h1>
      <p className="text-xl text-muted-foreground mb-8">Официальная продукция клуба</p>
      
      <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
        {shopItems.map((item) => (
          <Card key={item.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="text-6xl mb-4 text-center">{item.image}</div>
              <Badge variant="secondary" className="w-fit mb-2">{item.category}</Badge>
              <CardTitle className="text-lg">{item.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-primary">{item.price} ₽</span>
                <Button size="sm">
                  <Icon name="ShoppingCart" size={16} />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );

  const renderSection = () => {
    switch (activeSection) {
      case 'home':
        return renderHome();
      case 'matches':
        return renderMatches();
      case 'team':
        return renderTeam();
      case 'history':
        return renderHistory();
      case 'shop':
        return renderShop();
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
              <img 
                src="https://cdn.poehali.dev/projects/3185891c-e5a8-4947-9f2f-820c915a14e7/files/c80bc576-45ec-4bea-8e8d-df0b1fd8a801.jpg" 
                alt="Спартак Москва" 
                className="w-12 h-12 object-contain"
              />
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
                  Москва, Лукойл Арена
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