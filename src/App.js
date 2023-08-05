import './App.css';
import 'font-awesome/css/font-awesome.min.css';

export default function App() {
  return (
    <div className='AirbnbCereal'>
      <header className="px-8 py-10">
        <div className="text-black flex justify-between font-AirbnbCerealBold text-2xl">
          <img className="h-fit max-w-full" src = {'/assets/logo.png'} alt="legato-logo" />
            <ul>
              <li className="md:inline-block cursor-pointer border-b md:border-none py-5 px-5">List a Piano</li>
              <li className="md:inline-block cursor-pointer border-b md:border-none py-5 px-5 relative"><a>Rent a Piano</a></li>
            </ul>
        </div>
      </header>
      <section className="px-[29%] text-center">
        <p className='text-6xl font-black font-AirbnbCerealBold py-6'>Rent or list a grand piano.</p>
        <p className="text-3xl py-6 font-AirbnbCerealNormal font-thin">Legato connects pianists with grand piano owners, giving them access to exquisite pianos at an affordable rate.</p>
        <p className="text-3xl py-6 font-AirbnbCerealNormal font-thin">90% of our revenue provides scholarships for up-and-coming pianists to play on our pianos.</p>
        <p className="text-3xl font-AirbnbCerealBold pt-11 pb-6">Sign up to be the first to know when we lanuch.</p>
        <div className="flex justify-center items-center gap-3">
          <div className="relative w-[50%]">
            <input type="text" className="py-3 px-4 block w-full outline-none shadow-sm rounded-md text-sm border border-gray-300 focus:border-gray-500" placeholder="Enter your email" />
            <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none z-20 pl-4">
            </div>
          </div>
          <img src={'/assets/join-legato-btn.png'} alt="join-legato-btn" className="cursor-pointer hover:opacity-80" />
        </div>
      </section>
      <img className="h-auto w-full" src = {'/assets/background-image1.jpg'} alt="legato-linear" />
      <section className="px-[20%] bg-cover pb-[3%]" style={{backgroundImage: `url(/assets/background-image2.jpg)`, backgroundSize: 'cover'}}>
        <p className="text-4xl font-AirbnbCerealBold text-[#34ACD7]">LIST A PIANO</p>
        <p className='text-6xl font-black font-AirbnbCerealBold py-5'>Benefit from philanthropic work.</p>
        <div className="py-8 flex pl-5">
          <img className="px-5 h-fit" src={'/assets/earn-tax.png'} alt="legato-earn-tax"/>
          <div className="text-3xl">
            <p className="font-AirbnbCerealBold">Earn tax write-offs:</p>
            <p className="font-AirbnbCerealNormal font-thin">Passively earn tax write-offs by supporting a musician</p>
          </div>
        </div>
        <div className="py-8 flex pl-5">
          <img className="px-5 h-fit" src={'/assets/make-friend.png'} alt="legato-make-friend"/>
          <div className="text-3xl">
            <p className="font-AirbnbCerealBold">Make a new friend:</p>
            <p className="font-AirbnbCerealNormal font-thin">Our 3-month contracts encourage long-term friendships</p>
          </div>
        </div>
        <div className="py-8 flex pl-5">
          <img className="px-5 h-fit" src={'/assets/learn-piano.png'} alt="legato-learn-piano"/>
          <div className="text-3xl">
            <p className="font-AirbnbCerealBold">Learn to play piano:</p>
            <p className="font-AirbnbCerealNormal font-thin">Legato provides opportunities for our talented pianists<br/>to give lessons to our piano owners.</p>
          </div>
        </div>
        <div className="flex items-center justify-center pt-11">
          <img src={'/assets/btn-interested2.png'} alt="legato-btn-interested2" className="cursor-pointer hover:opacity-80" />
        </div>
      </section>
      <section className="px-[20%] pt-[7%] pb-[3%]" style={{backgroundImage: `url(/assets/background-image3.jpg)`, backgroundSize: 'cover'}}>
        <p className="text-4xl font-AirbnbCerealBold text-white">RENT A PIANO</p>
        <p className='text-6xl font-black font-AirbnbCerealBold py-5'>No matter where you are,<br/>a grand piano is nearby.</p>
        <div className="py-8 flex items-center pl-5">
          <img className="px-5 h-fit" src={'/assets/grand-piano.png'} alt="legato-grand-piano"/>
          <p className="text-3xl font-AirbnbCerealNormal font-thin">Play on a grand piano</p>
        </div>
        <div className="py-8 flex items-center pl-5">
          <img className="px-5 h-fit" src={'/assets/month-contract.png'} alt="legato-month-contract"/>
          <p className="text-3xl font-AirbnbCerealNormal font-thin">Our 3-month contracts encourage set practice times</p>
        </div>
        <div className="py-8 flex items-center pl-5">
          <img className="px-5 h-fit" src={'/assets/payment-provide.png'} alt="legato-payment-provide"/>
          <p className="text-3xl font-AirbnbCerealNormal font-thin">90% of your payment is used to provide scholarships<br/>for other pianists to play our pianos.</p>
        </div>
        <div className="flex items-center justify-center pt-11">
          <img src={'/assets/btn-interested2.png'} alt="legato-btn-interested2" className="cursor-pointer hover:opacity-80" />
        </div>
      </section>
      <section className="px-[10%] pt-[10%] flex gap-1">
        <img src={'/assets/piano-near-me.jpg'} alt="legato-ceo" className="pr-10 h-fit"/>
        <div>
          <p className="text-6xl font-black font-AirbnbCerealBold text-black">David Mei</p>
          <p className="text-3xl font-AirbnbCerealBold text-[#34ACD7]">Founder</p>
          <p className="text-3xl font-AirbnbCerealNormal">David is an international award-winning concert pianist currently studying under<br/>
          Elena Galynina. He has played since age 6 and was First Prize Winner of Triumph<br/>
          Music Festival 2022 Professional Division and First Prize Winner of Irving Ludwig<br/>
          Young Artists' Competition 2011. His favorite piece to play is "Chasse-neige"<br/>
          by Franz Liszt.</p>
          <br/><br/>
          <p className="text-3xl font-AirbnbCerealNormal">David started Legato as a dream for just him to be able to rent a local grand<br/>
          piano. As Legato's team grew, it became clear that Legato can benefit a lot<br/>
          more people. We are on a mission to increase the perceived importance of<br/>
          music around the world.</p>
        </div>
      </section>
      <footer className="pl-[60%] py-[5%] text-4xl font-black font-AirbnbCerealBold">
          reach out to <a className="text-[#34ACD7]">legato.ceo@gmail.com</a><br/>to join the team
      </footer>
    </div>
  );
}