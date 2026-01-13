import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

export default function Index() {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-border">
        <div className="container mx-auto px-4">
          <nav className="flex items-center justify-between h-20">
            <div className="flex items-center gap-2">
              <Icon name="Sparkles" className="text-primary" size={32} />
              <span className="text-2xl font-bold text-primary">Чистый Взгляд</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <button onClick={() => scrollToSection('home')} className="text-sm font-medium hover:text-primary transition-colors">Главная</button>
              <button onClick={() => scrollToSection('services')} className="text-sm font-medium hover:text-primary transition-colors">Услуги</button>
              <button onClick={() => scrollToSection('prices')} className="text-sm font-medium hover:text-primary transition-colors">Цены</button>
              <button onClick={() => scrollToSection('about')} className="text-sm font-medium hover:text-primary transition-colors">О компании</button>
              <button onClick={() => scrollToSection('reviews')} className="text-sm font-medium hover:text-primary transition-colors">Отзывы</button>
              <button onClick={() => scrollToSection('contacts')} className="text-sm font-medium hover:text-primary transition-colors">Контакты</button>
            </div>
            <a href="tel:+79991234567" className="hidden md:flex items-center gap-2 font-semibold text-lg text-primary hover:text-primary/80 transition-colors">
              <Icon name="Phone" size={20} />
              +7 (999) 123-45-67
            </a>
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <button className="md:hidden p-2">
                  <Icon name="Menu" size={24} />
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px] sm:w-[350px]">
                <div className="flex flex-col gap-6 mt-8">
                  <div className="flex items-center gap-2 pb-4 border-b">
                    <Icon name="Sparkles" className="text-primary" size={28} />
                    <span className="text-xl font-bold text-primary">Чистый Взгляд</span>
                  </div>
                  <nav className="flex flex-col gap-4">
                    <button 
                      onClick={() => { scrollToSection('home'); setMobileMenuOpen(false); }} 
                      className="text-left text-lg font-medium hover:text-primary transition-colors py-2"
                    >
                      Главная
                    </button>
                    <button 
                      onClick={() => { scrollToSection('services'); setMobileMenuOpen(false); }} 
                      className="text-left text-lg font-medium hover:text-primary transition-colors py-2"
                    >
                      Услуги
                    </button>
                    <button 
                      onClick={() => { scrollToSection('prices'); setMobileMenuOpen(false); }} 
                      className="text-left text-lg font-medium hover:text-primary transition-colors py-2"
                    >
                      Цены
                    </button>
                    <button 
                      onClick={() => { scrollToSection('about'); setMobileMenuOpen(false); }} 
                      className="text-left text-lg font-medium hover:text-primary transition-colors py-2"
                    >
                      О компании
                    </button>
                    <button 
                      onClick={() => { scrollToSection('reviews'); setMobileMenuOpen(false); }} 
                      className="text-left text-lg font-medium hover:text-primary transition-colors py-2"
                    >
                      Отзывы
                    </button>
                    <button 
                      onClick={() => { scrollToSection('contacts'); setMobileMenuOpen(false); }} 
                      className="text-left text-lg font-medium hover:text-primary transition-colors py-2"
                    >
                      Контакты
                    </button>
                  </nav>
                  <div className="pt-4 border-t">
                    <a href="tel:+79991234567" className="flex items-center gap-3 text-primary font-semibold text-lg">
                      <Icon name="Phone" size={22} />
                      +7 (999) 123-45-67
                    </a>
                    <p className="text-sm text-muted-foreground mt-2">Ежедневно с 8:00 до 22:00</p>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </nav>
        </div>
      </header>

      <main className="pt-20">
        <section id="home" className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-primary/5 via-secondary/5 to-background overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <img 
              src="https://cdn.poehali.dev/projects/de2f7c74-2898-4917-b8c2-0ab4ec242ff5/files/4ebae10f-ab37-4e8d-a635-48749e07b301.jpg" 
              alt="Clean living room" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center animate-fade-in">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground">
                Идеальная чистота <br />
                <span className="text-primary">без ваших усилий</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Уборка квартир, домов и офисов с гарантией качества. Работаем с 2015 года
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="text-lg px-8 py-6 bg-accent hover:bg-accent/90" onClick={() => scrollToSection('contacts')}>
                  <Icon name="Calculator" className="mr-2" size={20} />
                  Рассчитать стоимость
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-primary text-primary hover:bg-primary hover:text-primary-foreground" onClick={() => scrollToSection('contacts')}>
                  <Icon name="Phone" className="mr-2" size={20} />
                  Заказать звонок
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                { icon: 'Award', title: 'Работаем с 2015 года', desc: 'Более 10 000 довольных клиентов' },
                { icon: 'Leaf', title: 'Эко-средства', desc: 'Безопасно для детей и животных' },
                { icon: 'ShieldCheck', title: 'Гарантия 100%', desc: 'Переделаем бесплатно при необходимости' },
                { icon: 'Lock', title: 'Страхуем имущество', desc: 'Ваше имущество под защитой' },
                { icon: 'Banknote', title: 'Фиксированная цена', desc: 'Без скрытых доплат' },
                { icon: 'CreditCard', title: 'Оплата по факту', desc: 'Платите после уборки' }
              ].map((item, i) => (
                <Card key={i} className="border-none shadow-lg hover:shadow-xl transition-all duration-300 animate-scale-in" style={{ animationDelay: `${i * 0.1}s` }}>
                  <CardHeader>
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <Icon name={item.icon} className="text-primary" size={32} />
                    </div>
                    <CardTitle className="text-xl">{item.title}</CardTitle>
                    <CardDescription className="text-base">{item.desc}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="services" className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Наши услуги</h2>
              <p className="text-xl text-muted-foreground">Профессиональная уборка любой сложности</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                { 
                  icon: 'Home', 
                  title: 'Поддерживающая уборка', 
                  desc: 'Регулярная уборка для поддержания чистоты',
                  items: ['Пыль и пылесос', 'Мытье полов', 'Уборка кухни', 'Уборка санузла'],
                  price: 'от 2 500 ₽'
                },
                { 
                  icon: 'Sparkles', 
                  title: 'Генеральная уборка', 
                  desc: 'Глубокая уборка всех помещений',
                  items: ['Мытье окон', 'Чистка мебели', 'Плиты и духовки', 'Труднодоступные места'],
                  price: 'от 4 500 ₽'
                },
                { 
                  icon: 'Hammer', 
                  title: 'Уборка после ремонта', 
                  desc: 'Избавим от строительной пыли и грязи',
                  items: ['Удаление пыли', 'Мытье окон', 'Очистка поверхностей', 'Вывоз мусора'],
                  price: 'от 6 000 ₽'
                },
                { 
                  icon: 'Layers', 
                  title: 'Мойка окон', 
                  desc: 'Чистота и прозрачность стекол',
                  items: ['Внутри и снаружи', 'Рамы и подоконники', 'Москитные сетки', 'Балконные блоки'],
                  price: 'от 150 ₽/м²'
                },
                { 
                  icon: 'Building', 
                  title: 'Уборка офисов', 
                  desc: 'Чистота в вашем бизнесе',
                  items: ['Рабочие зоны', 'Переговорные', 'Кухня', 'Санузлы'],
                  price: 'от 3 500 ₽'
                },
                { 
                  icon: 'Star', 
                  title: 'Химчистка мебели', 
                  desc: 'Удаление пятен и освежение обивки',
                  items: ['Диваны', 'Кресла', 'Матрасы', 'Ковры'],
                  price: 'от 2 000 ₽'
                }
              ].map((service, i) => (
                <Card key={i} className="hover:shadow-2xl transition-all duration-300 border-2 hover:border-primary group">
                  <CardHeader>
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Icon name={service.icon} className="text-white" size={36} />
                    </div>
                    <CardTitle className="text-2xl">{service.title}</CardTitle>
                    <CardDescription className="text-base">{service.desc}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-6">
                      {service.items.map((item, j) => (
                        <li key={j} className="flex items-center gap-2 text-sm">
                          <Icon name="Check" className="text-primary" size={16} />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-primary">{service.price}</span>
                      <Button onClick={() => scrollToSection('contacts')} className="bg-primary hover:bg-primary/90">
                        Заказать
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Как мы работаем</h2>
              <p className="text-xl text-muted-foreground">Простой процесс от заявки до идеальной чистоты</p>
            </div>
            <div className="max-w-5xl mx-auto">
              <div className="grid md:grid-cols-5 gap-8">
                {[
                  { icon: 'PhoneCall', title: 'Заявка', desc: 'Звоните или оставьте заявку онлайн' },
                  { icon: 'Calculator', title: 'Расчет', desc: 'Бесплатный расчет стоимости' },
                  { icon: 'Calendar', title: 'Дата', desc: 'Выбираете удобное время' },
                  { icon: 'Users', title: 'Приезд', desc: 'Клинеры приезжают и работают' },
                  { icon: 'CheckCircle2', title: 'Готово!', desc: 'Принимаете работу и оплачиваете' }
                ].map((step, i) => (
                  <div key={i} className="text-center animate-fade-in" style={{ animationDelay: `${i * 0.15}s` }}>
                    <div className="relative mb-6">
                      <div className="w-20 h-20 rounded-full bg-white shadow-xl flex items-center justify-center mx-auto">
                        <Icon name={step.icon} className="text-primary" size={32} />
                      </div>
                      <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-24 h-24 rounded-full bg-primary/20 -z-10 animate-pulse"></div>
                    </div>
                    <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="prices" className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Цены</h2>
              <p className="text-xl text-muted-foreground">Прозрачные цены без скрытых доплат</p>
            </div>
            <div className="max-w-4xl mx-auto">
              <Card className="shadow-2xl">
                <CardHeader>
                  <CardTitle className="text-2xl">Базовые расценки</CardTitle>
                  <CardDescription>Точная стоимость рассчитывается индивидуально</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { service: 'Поддерживающая уборка', price: 'от 150 ₽/м²' },
                      { service: 'Генеральная уборка', price: 'от 200 ₽/м²' },
                      { service: 'Уборка после ремонта', price: 'от 250 ₽/м²' },
                      { service: 'Мойка окон', price: 'от 150 ₽/м²' },
                      { service: 'Химчистка дивана', price: 'от 2 000 ₽' },
                      { service: 'Мытье холодильника', price: 'от 500 ₽' },
                      { service: 'Глажка белья', price: 'от 300 ₽/час' }
                    ].map((item, i) => (
                      <div key={i} className="flex items-center justify-between p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                        <span className="font-medium">{item.service}</span>
                        <span className="text-lg font-bold text-primary">{item.price}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-8 p-6 bg-primary/10 rounded-lg">
                    <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                      <Icon name="Gift" className="text-primary" />
                      Специальные предложения
                    </h3>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <Icon name="Check" className="text-primary" size={16} />
                        <span>Скидка 10% при заказе от 3 уборок</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Icon name="Check" className="text-primary" size={16} />
                        <span>Бесплатная мойка холодильника при генеральной уборке</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Icon name="Check" className="text-primary" size={16} />
                        <span>Первая уборка со скидкой 15%</span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="reviews" className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Отзывы клиентов</h2>
              <p className="text-xl text-muted-foreground">Нам доверяют тысячи клиентов</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                { name: 'Елена Смирнова', rating: 5, text: 'Заказывала генеральную уборку после ремонта. Ребята справились на отлично! Все блестит, даже в самых труднодоступных местах. Рекомендую!', date: '2 недели назад' },
                { name: 'Андрей Петров', rating: 5, text: 'Пользуемся услугами уже полгода. Приходят вовремя, работают быстро и качественно. Цены адекватные. Очень довольны!', date: '1 месяц назад' },
                { name: 'Мария Козлова', rating: 5, text: 'Отличная компания! Клинеры вежливые, аккуратные. Использовали эко-средства, что важно для меня, так как дома маленький ребенок. Буду заказывать еще!', date: '3 недели назад' }
              ].map((review, i) => (
                <Card key={i} className="shadow-lg hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-lg">
                        {review.name[0]}
                      </div>
                      <div>
                        <CardTitle className="text-lg">{review.name}</CardTitle>
                        <div className="flex items-center gap-1 mt-1">
                          {[...Array(review.rating)].map((_, j) => (
                            <Icon key={j} name="Star" className="text-yellow-500 fill-yellow-500" size={16} />
                          ))}
                        </div>
                      </div>
                    </div>
                    <CardDescription className="text-base leading-relaxed">{review.text}</CardDescription>
                    <p className="text-xs text-muted-foreground mt-4">{review.date}</p>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold mb-4">О компании</h2>
                <p className="text-xl text-muted-foreground">Профессионалы клининга с 2015 года</p>
              </div>
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <img 
                    src="https://cdn.poehali.dev/projects/de2f7c74-2898-4917-b8c2-0ab4ec242ff5/files/ccff45b9-f0ef-46cc-8a68-639863afd57d.jpg" 
                    alt="Our team" 
                    className="rounded-2xl shadow-2xl"
                  />
                </div>
                <div className="space-y-6">
                  <p className="text-lg leading-relaxed">
                    <strong className="text-primary">Чистый Взгляд</strong> — это команда профессионалов, которая создает идеальную чистоту в вашем доме или офисе.
                  </p>
                  <p className="text-lg leading-relaxed">
                    С 2015 года мы помогаем тысячам клиентов освободить время для важных дел, взяв на себя заботу о чистоте.
                  </p>
                  <div className="grid grid-cols-2 gap-6 pt-6">
                    <div className="text-center p-4 bg-primary/10 rounded-lg">
                      <div className="text-4xl font-bold text-primary mb-2">10K+</div>
                      <div className="text-sm text-muted-foreground">Довольных клиентов</div>
                    </div>
                    <div className="text-center p-4 bg-secondary/10 rounded-lg">
                      <div className="text-4xl font-bold text-secondary mb-2">9+</div>
                      <div className="text-sm text-muted-foreground">Лет на рынке</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contacts" className="py-20 bg-gradient-to-br from-primary to-secondary text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold mb-4">Свяжитесь с нами</h2>
                <p className="text-xl opacity-90">Оставьте заявку и мы перезвоним в течение 5 минут</p>
              </div>
              <div className="grid md:grid-cols-2 gap-12">
                <Card className="shadow-2xl">
                  <CardHeader>
                    <CardTitle className="text-2xl">Оставить заявку</CardTitle>
                    <CardDescription>Заполните форму и мы свяжемся с вами</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                      <div>
                        <Label htmlFor="name">Ваше имя</Label>
                        <Input id="name" placeholder="Иван Иванов" />
                      </div>
                      <div>
                        <Label htmlFor="phone">Телефон</Label>
                        <Input id="phone" type="tel" placeholder="+7 (999) 123-45-67" />
                      </div>
                      <div>
                        <Label htmlFor="service">Тип уборки</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Выберите услугу" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="regular">Поддерживающая уборка</SelectItem>
                            <SelectItem value="general">Генеральная уборка</SelectItem>
                            <SelectItem value="repair">Уборка после ремонта</SelectItem>
                            <SelectItem value="windows">Мойка окон</SelectItem>
                            <SelectItem value="office">Уборка офиса</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="message">Комментарий</Label>
                        <Textarea id="message" placeholder="Укажите площадь, особые пожелания..." rows={3} />
                      </div>
                      <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-lg py-6">
                        Отправить заявку
                      </Button>
                    </form>
                  </CardContent>
                </Card>
                <div className="space-y-8">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-colors">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                        <Icon name="Phone" size={24} />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-2">Телефон</h3>
                        <a href="tel:+79991234567" className="text-xl hover:underline">+7 (999) 123-45-67</a>
                        <p className="text-sm opacity-80 mt-1">Ежедневно с 8:00 до 22:00</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-colors">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                        <Icon name="Mail" size={24} />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-2">Email</h3>
                        <a href="mailto:info@clean-view.ru" className="text-xl hover:underline">info@clean-view.ru</a>
                        <p className="text-sm opacity-80 mt-1">Ответим в течение часа</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-colors">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                        <Icon name="MapPin" size={24} />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-2">Зона обслуживания</h3>
                        <p className="text-lg">Москва и Московская область</p>
                        <p className="text-sm opacity-80 mt-1">Выезд в день обращения</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-foreground text-background py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Sparkles" size={28} />
                <span className="text-xl font-bold">Чистый Взгляд</span>
              </div>
              <p className="text-sm opacity-80">Профессиональная уборка с 2015 года</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Услуги</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li>Поддерживающая уборка</li>
                <li>Генеральная уборка</li>
                <li>Уборка после ремонта</li>
                <li>Мойка окон</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Компания</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li>О нас</li>
                <li>Отзывы</li>
                <li>Вакансии</li>
                <li>Контакты</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li>+7 (999) 123-45-67</li>
                <li>info@clean-view.ru</li>
                <li>Москва и МО</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-background/20 pt-8 text-center text-sm opacity-80">
            <p>&copy; 2025 Чистый Взгляд. Все права защищены.</p>
            <p className="mt-2">Политика конфиденциальности</p>
          </div>
        </div>
      </footer>
    </div>
  );
}