import React from 'react';
import './App.css';

function App() {
  return (
    <div className="cv-container">
      <div className="left-column">
        <img className="profile-img" src="/profile3.jpeg" alt="Profile" />
        <h1>Batuhan Güzel</h1>
        <p className="role">Web Developer</p>
        <div className="contact-info">
          <p>Email: batubjk_56@hotmail.com</p>
          <p>Telefon: +90 5380333286</p>
        </div>
       

        <div className="social-media">
  <a href="https://www.instagram.com/batuhanguuzel/" target="_blank" rel="noopener noreferrer">
    <i className="fab fa-instagram"></i>
  </a>
  <a href="https://x.com/baftatu" target="_blank" rel="noopener noreferrer">
    <i className="fab fa-x"></i>
  </a>
  <a href="https://www.facebook.com/batuhan789" target="_blank" rel="noopener noreferrer">
    <i className="fab fa-facebook"></i>
  </a>
  <a href="https://github.com/batu6834" target="_blank" rel="noopener noreferrer">
    <i className="fab fa-github"></i>
  </a>
  <a href="https://www.linkedin.com/in/batuhan-g%C3%BCzel-087810232/" target="_blank" rel="noopener noreferrer">
    <i className="fab fa-linkedin"></i>
  </a>
</div>

<div className="career-planning">
      <h3>Kariyer Planlaması</h3>
      <p>
        HTML, CSS, Bootstrap ve Responsive Tasarım konularında iyi derecede bilgi sahibiyim. 
        JavaScript'i başlangıç seviyesinde öğreniyorum ve ilerleyen zamanlarda Node.js ve React gibi 
        teknolojileri öğrenerek full-stack developer olmayı hedefliyorum.
      </p>
    </div>



      </div>
      <div className="right-column">
        <section className="education">
          <h2>Eğitim</h2>
          <p><span>Lise</span> <br></br>Sadabad Anadolu Lisesi (2016-2019)</p>
          <p><span>Üniversite</span> <br></br> Kapadokya Üniversitesi (2023 - Devam Ediyor)</p>
        </section>
        <section className="experience">
          <h2>İş Deneyimleri</h2>
          <p><span>Eyüp Sultan Türbesi - Restorasyon</span> <br></br>2014 - 2014</p>
          <p><span>Anonim Restaurant - Komi</span> <br></br>2014 - 2014</p>
          <p><span>Cafe Platonik - Garson</span> <br></br>2015 - 2018</p>
          <p><span>Saklıbahçe Cafe - İşletmeci</span> <br></br>2018 - 2022</p>
          <p><span>Kahve Dünyası - Garson</span> <br></br>2022 - 2022</p>
          <p><span>Defacto - Depo Görevlisi</span> <br></br>2023 - 2023</p>
        </section>
        <section className="skills">
          <h2>Yetenekler</h2>
          <p>HTML, CSS, Responsive Tasarım, Bootstrap, JavaScript, React</p>
        </section>
        <section className="skills">
          <h2>Hobiler</h2>
          <p>Yeni teknolojileri araştırmak</p>
          <p>Spor yapmak</p>
          <p>Sürekli olarak kendimi geliştirmek</p>
        </section>
      </div>
    </div>
  );
}

export default App;
