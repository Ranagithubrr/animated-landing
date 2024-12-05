import HeroBg from '../../assets/img/hero-bg.webp';
const Hero = () => {
  return (
    <div className="h-screen max-w-screen-2xl mx-auto flex items-left justify-center flex-col -mt-36"
    style={{ backgroundImage: `url(${HeroBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <h1 className="text-brand-primary text-6xl font-extrabold">EMPOWER YOUR GLOBAL TRADE</h1>
      <p className="text-brand-primary text-3xl mt-5">with high-efficiency and FTZ solutions.</p>
    </div>
  );
};

export default Hero;