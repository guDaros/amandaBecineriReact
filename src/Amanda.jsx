import React, { useState, useEffect, useRef } from 'react';

// ===== ESTILOS GLOBAIS =====
const GlobalStyles = () => (
  <style>{`
    /* Import das novas fontes */
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;500;600;700&display=swap');
    
    /* Reset e configurações base */
    html {
      font-size: 16px;
      scroll-behavior: smooth;
      width: 100%;
      height: 100%;
    }
    
    body, #root, .App {
      margin: 0;
      padding: 0;
      width: 100%;
      min-height: 100vh;
      overflow-x: hidden;
      position: relative;
    }

    /* Box sizing para todos os elementos */
    *, *::before, *::after {
      box-sizing: border-box;
    }

    .img-gradient {
      position: relative;
      width: 600px;
      height: 400px;
      overflow: hidden;
    }

    .img-gradient img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
    }

    .gradient {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4));
    }

    #teste {
      background-image: url(freepik__convert-this-image-to-png-format-with-a-transparen__5259.png);
      background-position: top center;
      background-color: black;
    }

    #consultation {
      margin-top: 10rem;
    }

    .custom-shape-divider-top-1750364793 {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      overflow: hidden;
      line-height: 0;
      z-index: 3;
    }

    .custom-shape-divider-top-1750364793 svg {
      position: relative;
      display: block;
      width: calc(120% + 1.3px);
      height: 80px;
      transform: rotateY(180deg);
    }

    .custom-shape-divider-top-1750364793 .shape-fill {
      fill: var(--cream);
    }

    .custom-shape-divider-bottom-1750364760 {
      position: absolute;
      bottom: -1px;
      left: 0;
      width: 100%;
      overflow: hidden;
      line-height: 0;
      transform: rotate(180deg);
      z-index: 3;
    }

    .custom-shape-divider-bottom-1750364760 svg {
      position: relative;
      display: block;
      width: calc(120% + 1.3px);
      height: 80px;
    }

    .custom-shape-divider-bottom-1750364760 .shape-fill {
      fill: #FFFFFF;
    }

    .custom-shape-divider-bottom-1750092370 {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      overflow: hidden;
      line-height: 0;
      z-index: 3;
    }

    .custom-shape-divider-bottom-1750092370 svg {
      position: relative;
      display: block;
      width: calc(120% + 1.3px);
      height: 80px;
    }

    .custom-shape-divider-bottom-1750092370 .shape-fill {
      fill: var(--cream);
    }

    .custom-shape-divider-bottom-1750090480 {
      position: absolute;
      bottom: -1px;
      left: 0;
      width: 100%;
      overflow: hidden;
      line-height: 0;
      z-index: 3;
    }

    .custom-shape-divider-bottom-1750090480 svg {
      position: relative;
      display: block;
      width: calc(120% + 1.3px);
      height: 80px;
    }

    .custom-shape-divider-bottom-1750090480 .shape-fill {
      fill: #FFFFFF;
    }

    .custom-shape-divider-top-1750090644 {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      overflow: hidden;
      line-height: 0;
      transform: rotate(180deg);
      z-index: 3;
    }

    .custom-shape-divider-top-1750090644 svg {
      position: relative;
      display: block;
      width: calc(120% + 1.3px);
      height: 80px;
    }

    .custom-shape-divider-top-1750090644 .shape-fill {
      fill: #FFFFFF;
    }

    @media (max-width: 768px) {
      .custom-shape-divider-top-1750364793 svg,
      .custom-shape-divider-bottom-1750364760 svg,
      .custom-shape-divider-bottom-1750092370 svg,
      .custom-shape-divider-bottom-1750090480 svg,
      .custom-shape-divider-top-1750090644 svg {
        height: 50px;
        width: calc(150% + 1.3px);
      }
    }

    :root {
      --pink-primary: #e4b8c0;
      --pink-light: #ffd8e1;
      --blue-light: #dbe3eb;
      --blue-medium: #688fcc;
      --blue-dark: #003466;
      --cream: #fff8f5;
      --gold: #d4af37;
    }

    body {
      font-family: "Montserrat", sans-serif;
      background: var(--cream);
      color: var(--blue-dark);
      line-height: 1.6;
      overflow-x: hidden;
      width: 100%;
      margin: 0;
      padding: 0;
      min-height: 100vh;
    }

    .title-font {
      font-family: "Playfair Display", serif;
    }

    .secondary-font {
      font-family: "Dancing Script", cursive;
    }

    .body-font {
      font-family: "Montserrat", sans-serif;
    }

    header {
      position: fixed;
      top: 0;
      width: 100%;
      background: rgba(255, 248, 245, 0.95);
      backdrop-filter: blur(10px);
      z-index: 1000;
      padding: 1rem 0;
      transition: all 0.3s ease;
    }

    header.scrolled {
      background: rgba(255, 248, 245, 0.98);
      box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
    }

    @media (max-width: 768px) {
      header.hidden {
        transform: translateY(-100%);
      }
    }

    nav {
      max-width: 84rem;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 2rem;
    }

    .logo {
      font-size: 1.5rem;
      font-weight: 600;
      color: var(--blue-dark);
      text-decoration: none;
    }

    .nav-links {
      display: flex;
      list-style: none;
      gap: 1.5rem;
    }

    .nav-links a {
      text-decoration: none;
      color: var(--blue-dark);
      font-weight: 400;
      font-size: 0.9rem;
      transition: all 0.3s ease;
      padding: 0.5rem 1rem;
      border-radius: 20px;
      position: relative;
    }

    .nav-links a:hover {
      color: var(--pink-primary);
      background: rgba(228, 184, 192, 0.1);
      transform: translateY(-2px);
    }

    .nav-links a.active {
      background: var(--pink-primary);
      color: white;
    }

    .mobile-menu-btn {
      display: none;
      background: none;
      border: none;
      font-size: 1.5rem;
      color: var(--blue-dark);
      cursor: pointer;
      z-index: 1001;
      position: relative;
    }

    .nav-links.mobile-open {
      display: flex;
      flex-direction: column;
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(255, 248, 245, 0.98);
      backdrop-filter: blur(10px);
      padding: 6rem 2rem 30rem;
      gap: 1.5rem;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
      z-index: 1000;
    }

    .nav-links.mobile-open a {
      font-size: 1.2rem;
      padding: 1rem;
      text-align: center;
      border-bottom: 1px solid rgba(228, 184, 192, 0.2);
    }

    .hero {
      min-height: 60vh;
      display: flex;
      align-items: center;
      justify-content: center;
      background: linear-gradient(135deg, var(--cream) 0%, var(--pink-light) 100%);
      position: relative;
      overflow: hidden;
    }

    .hero::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="20" cy="20" r="2" fill="%23E4B8C0" opacity="0.3"/><circle cx="80" cy="30" r="1.5" fill="%23688FCC" opacity="0.2"/><circle cx="40" cy="70" r="1" fill="%23D4AF37" opacity="0.4"/></svg>');
      animation: float 20s infinite linear;
    }

    @keyframes float {
      0% { transform: translateY(0px); }
      50% { transform: translateY(-20px); }
      100% { transform: translateY(0px); }
    }

    .hero-content {
      text-align: center;
      z-index: 2;
      position: relative;
    }

    .hero h1 {
      font-size: 3rem;
      font-weight: 700;
      color: var(--blue-dark);
      margin-bottom: 3rem;
      opacity: 0;
      animation: fadeInUp 1s ease 0.5s forwards;
    }

    .hero .subtitle {
      font-size: 1.8rem;
      color: var(--pink-primary);
      margin-bottom: 0.5rem;
      opacity: 0;
      animation: fadeInUp 1s ease 0.7s forwards;
    }

    .hero .description {
      font-size: 1.2rem;
      color: var(--blue-medium);
      margin-bottom: 2rem;
      opacity: 0;
      animation: fadeInUp 1s ease 0.9s forwards;
    }

    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @keyframes fadeInLeft {
      from {
        opacity: 0;
        transform: translateX(-50px);
      }
      to {
        opacity: 1;
        transform: translateX(0);
      }
    }

    @keyframes fadeInRight {
      from {
        opacity: 0;
        transform: translateX(50px);
      }
      to {
        opacity: 1;
        transform: translateX(0);
      }
    }

    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }

    @keyframes scaleIn {
      from {
        opacity: 0;
        transform: scale(0.8);
      }
      to {
        opacity: 1;
        transform: scale(1);
      }
    }

    .scroll-animate {
      opacity: 0;
      transform: translateY(50px);
      transition: all 0.8s ease;
    }

    .scroll-animate.animate {
      opacity: 1;
      transform: translateY(0);
    }

    .scroll-animate-left {
      opacity: 0;
      transform: translateX(-50px);
      transition: all 0.8s ease;
    }

    .scroll-animate-left.animate {
      opacity: 1;
      transform: translateX(0);
    }

    .scroll-animate-right {
      opacity: 0;
      transform: translateX(50px);
      transition: all 0.8s ease;
    }

    .scroll-animate-right.animate {
      opacity: 1;
      transform: translateX(0);
    }

    .scroll-animate-scale {
      opacity: 0;
      transform: scale(0.8);
      transition: all 0.8s ease;
    }

    .scroll-animate-scale.animate {
      opacity: 1;
      transform: scale(1);
    }

    .scroll-animate-delay-1 { transition-delay: 0.2s; }
    .scroll-animate-delay-2 { transition-delay: 0.4s; }
    .scroll-animate-delay-3 { transition-delay: 0.6s; }
    .scroll-animate-delay-4 { transition-delay: 0.8s; }

    .cta-buttons {
      display: flex;
      gap: 1.5rem;
      justify-content: center;
      flex-wrap: wrap;
      
    }

    .cta-button {
      display: inline-block;
      padding: 1rem 2.5rem;
      background: linear-gradient(135deg, var(--pink-primary), var(--blue-medium));
      color: white;
      text-decoration: none;
      border-radius: 50px;
      font-weight: 500;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      box-shadow: 0 10px 30px rgba(228, 184, 192, 0.3);
      opacity: 0;
      animation: fadeInUp 1s ease 1.1s forwards;
      min-width: 200px;
      text-align: center;
    }

    .cta-button.secondary {
      background: linear-gradient(135deg, var(--blue-medium), var(--blue-dark));
      animation-delay: 1.3s;
    }

    .cta-button:hover {
      transform: translateY(-3px);
      box-shadow: 0 15px 40px rgba(228, 184, 192, 0.4);
    }

    .cta-button.secondary:hover {
      box-shadow: 0 15px 40px rgba(104, 143, 204, 0.4);
    }

    .whatsapp-float {
      position: fixed;
      bottom: 30px;
      right: 30px;
      width: 60px;
      height: 60px;
      background: #25D366;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 8px 25px rgba(37, 211, 102, 0.3);
      z-index: 1000;
      transition: all 0.3s ease;
      cursor: pointer;
      animation: pulse 2s infinite;
    }

    .whatsapp-float:hover {
      transform: scale(1.1);
      box-shadow: 0 12px 35px rgba(37, 211, 102, 0.5);
    }

    .whatsapp-float svg {
      width: 35px;
      height: 35px;
      fill: white;
    }

    @keyframes pulse {
      0% {
        box-shadow: 0 8px 25px rgba(37, 211, 102, 0.3), 0 0 0 0 rgba(37, 211, 102, 0.7);
      }
      70% {
        box-shadow: 0 8px 25px rgba(37, 211, 102, 0.3), 0 0 0 10px rgba(37, 211, 102, 0);
      }
      100% {
        box-shadow: 0 8px 25px rgba(37, 211, 102, 0.3), 0 0 0 0 rgba(37, 211, 102, 0);
      }
    }

    .contact-section {
      padding: 4rem 2rem;
      background: var(--cream);
      text-align: center;
      position: relative;
    }

    .contact-container {
      max-width: 600px;
      margin: 0 auto;
    }

    .contact-title {
      font-size: 2.5rem;
      margin-bottom: 1rem;
      color: var(--blue-dark);
    }

    .contact-subtitle {
      font-size: 1.2rem;
      margin-bottom: 3rem;
      color: var(--blue-medium);
    }

    .main-whatsapp-button {
      display: inline-flex;
      align-items: center;
      gap: 1rem;
      padding: 1.5rem 3rem;
      background: #25D366;
      color: white;
      text-decoration: none;
      border-radius: 50px;
      font-weight: 600;
      font-size: 1.2rem;
      transition: all 0.3s ease;
      box-shadow: 0 10px 30px rgba(37, 211, 102, 0.3);
      margin-bottom: 3rem;
    }

    .main-whatsapp-button:hover {
      transform: translateY(-3px);
      box-shadow: 0 15px 40px rgba(37, 211, 102, 0.4);
      background: #128C7E;
    }

    .main-whatsapp-button svg {
      width: 24px;
      height: 24px;
      fill: currentColor;
    }

    .contact-info-simple {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 1.5rem;
      margin-top: 2rem;
    }

    .contact-info-item {
      padding: 1.5rem;
      background: white;
      border-radius: 15px;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
      border-left: 4px solid var(--pink-primary);
    }

    .contact-info-item h4 {
      font-size: 1.1rem;
      margin-bottom: 0.5rem;
      color: var(--blue-dark);
    }

    .contact-info-item p {
      font-size: 0.95rem;
      color: var(--blue-medium);
    }

    .palette-section {
      padding: 5rem 2rem;
      background: white;
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 1rem;
      width: 100%;
    }

    /* Garantir que todas as seções sejam responsivas */
    section {
      width: 100%;
      position: relative;
    }

    .section-title {
      font-size: 2.5rem;
      text-align: center;
      color: var(--blue-dark);
      margin-bottom: 3rem;
    }

    .color-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 2rem;
      margin-bottom: 4rem;
    }

    .color-card {
      background: white;
      border-radius: 20px;
      overflow: hidden;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
      transition: transform 0.3s ease;
    }

    .color-card:hover {
      transform: translateY(-10px);
    }

    .color-sample {
      height: 150px;
      position: relative;
    }

    .color-code {
      position: absolute;
      bottom: 10px;
      left: 10px;
      background: rgba(255, 255, 255, 0.9);
      padding: 0.5rem 1rem;
      border-radius: 20px;
      font-weight: 500;
      font-size: 0.9rem;
    }

    .about-section {
      padding: 5rem 2rem;
      background: #FFFFFF;
    }

    .about-container {
      max-width: 1200px;
      margin: 0 auto;
      display: grid;
      grid-template-columns: 350px 1fr;
      gap: 4rem;
      align-items: center;
    }

    .profile-wrapper {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .floral-frame {
      position: relative;
      width: 280px;
      height: 280px;
    }

    .profile-image {
      width: 250px;
      height: 250px;
      border-radius: 50%;
      background: linear-gradient(135deg, var(--pink-primary), var(--blue-medium));
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
      position: relative;
      overflow: hidden;
      margin: 15px;
      z-index: 2;
    }

    .profile-image::before {
      color: white;
      font-size: 1.1rem;
      text-align: center;
      font-weight: 500;
    }

    .floral-frame::before,
    .floral-frame::after {
      content: '';
      position: absolute;
      width: 40px;
      height: 40px;
      background: var(--pink-primary);
      border-radius: 50% 0 50% 0;
      transform: rotate(45deg);
      opacity: 0.7;
    }

    .floral-frame::before {
      top: 20px;
      left: 20px;
      animation: floralFloat 3s ease-in-out infinite;
    }

    .floral-frame::after {
      bottom: 20px;
      right: 20px;
      background: var(--blue-medium);
      animation: floralFloat 3s ease-in-out infinite reverse;
    }

    .petal {
      position: absolute;
      width: 30px;
      height: 30px;
      background: var(--pink-light);
      border-radius: 50% 0 50% 0;
      transform: rotate(45deg);
      opacity: 0.6;
    }

    .petal:nth-child(1) {
      top: 10px;
      right: 50px;
      background: var(--gold);
      animation: floralFloat 4s ease-in-out infinite;
    }

    .petal:nth-child(2) {
      bottom: 40px;
      left: 10px;
      background: var(--blue-light);
      animation: floralFloat 3.5s ease-in-out infinite reverse;
    }

    .petal:nth-child(3) {
      top: 60px;
      left: 5px;
      background: var(--pink-primary);
      width: 25px;
      height: 25px;
      animation: floralFloat 4.5s ease-in-out infinite;
    }

    .petal:nth-child(4) {
      bottom: 10px;
      right: 10px;
      background: var(--blue-medium);
      width: 35px;
      height: 35px;
      animation: floralFloat 3s ease-in-out infinite reverse;
    }

    @keyframes floralFloat {
      0%, 100% {
        transform: rotate(45deg) translateY(0px);
      }
      50% {
        transform: rotate(45deg) translateY(-10px);
      }
    }

    .about-content {
      padding: 2rem;
    }

    .about-content h2 {
      font-size: 2.5rem;
      color: var(--blue-dark);
      margin-bottom: 1rem;
    }

    .about-content .subtitle {
      font-size: 1.4rem;
      color: var(--pink-primary);
      margin-bottom: 2rem;
    }

    .about-text {
      font-size: 1.1rem;
      color: var(--blue-medium);
      line-height: 1.8;
      background: rgba(255, 255, 255, 0.7);
      padding: 2rem;
      border-radius: 15px;
      border-left: 4px solid var(--pink-primary);
      background: linear-gradient(135deg, var(--cream) 0%, var(--pink-light) 100%);
      margin-bottom: 2rem;
    }

    .about-whatsapp-button {
      display: inline-flex;
      align-items: center;
      gap: 1rem;
      padding: 1rem 2rem;
      background: #25D366;
      color: white;
      text-decoration: none;
      border-radius: 30px;
      font-weight: 500;
      font-size: 1rem;
      transition: all 0.3s ease;
      box-shadow: 0 8px 20px rgba(37, 211, 102, 0.3);
    }

    .about-whatsapp-button:hover {
      transform: translateY(-2px);
      box-shadow: 0 12px 30px rgba(37, 211, 102, 0.4);
      background: #128C7E;
    }

    .about-whatsapp-button svg {
      width: 20px;
      height: 20px;
      fill: currentColor;
    }

    .about-quote {
      max-width: 1200px;
      margin: 15rem auto 0;
      text-align: center;
      padding: 0 2rem;
    }

    .quote-text {
      font-size: 2rem;
      color: var(--blue-dark);
      font-style: italic;
      margin-bottom: 1rem;
      line-height: 1.4;
    }

    .quote-author {
      font-size: 1.8rem;
      color: var(--pink-primary);
      font-weight: 500;
    }

    .cta-consultation-section {
      padding: 4rem 2rem;
      background: linear-gradient(135deg, #D2691E, #FF7F50);
      color: white;
      text-align: center;
      position: relative;
      overflow: hidden;
    }

    .cta-consultation-section::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="10" cy="10" r="1" fill="white" opacity="0.1"/><circle cx="90" cy="20" r="1.5" fill="white" opacity="0.05"/><circle cx="30" cy="80" r="0.8" fill="white" opacity="0.08"/><circle cx="70" cy="60" r="1.2" fill="white" opacity="0.06"/></svg>');
      animation: float 25s infinite linear;
    }

    .cta-consultation-container {
      max-width: 800px;
      margin: 0 auto;
      position: relative;
      z-index: 2;
    }

    .cta-consultation-title {
      font-size: 2.5rem;
      margin-bottom: 2rem;
      font-weight: 600;
    }

    .cta-consultation-button {
      display: inline-flex;
      align-items: center;
      gap: 1rem;
      padding: 1.5rem 3rem;
      background: rgba(101, 133, 97, 1);
      color: white;
      text-decoration: none;
      border-radius: 50px;
      font-weight: 600;
      font-size: 1.2rem;
      transition: all 0.3s ease;
      box-shadow: 0 10px 30px rgba(101, 133, 97, 0.4);
    }

    .cta-consultation-button:hover {
      transform: translateY(-3px);
      box-shadow: 0 15px 40px rgba(101, 133, 97, 0.5);
      background: rgba(85, 113, 81, 1);
    }

    .cta-consultation-button svg {
      width: 24px;
      height: 24px;
      fill: currentColor;
    }

    .psychotherapy-section {
      padding: 5rem 2rem;
      background: var(--cream);
      position: relative;
      overflow: hidden;
    }

    .psychotherapy-container {
      max-width: 1200px;
      margin-top: 4rem;
      margin-left: auto;
      display: grid;
      grid-template-columns: 1fr 500px;
      gap: 4rem;
      align-items: center;
      margin-bottom: 5rem;
      margin-right: auto;
    }

    .psychotherapy-content {
      position: relative;
      z-index: 2;
    }

    .psychotherapy-content h2 {
      font-size: 2.8rem;
      color: var(--blue-dark);
      margin-bottom: 2rem;
      line-height: 1.2;
    }

    .psychotherapy-text {
      font-size: 1.1rem;
      color: var(--blue-medium);
      line-height: 1.8;
      background: white;
      padding: 2.5rem;
      border-radius: 20px;
      box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
      border-left: 5px solid var(--pink-primary);
    }

    .psychotherapy-text p {
      margin-bottom: 1.5rem;
    }

    .psychotherapy-text p:last-child {
      margin-bottom: 0;
    }

    .psychotherapy-image-wrapper {
      position: relative;
      height: 400px;
      border-radius: 20px;
      overflow: hidden;
      box-shadow: 0 20px 50px rgba(0, 0, 0, 0.15);
    }

    .psychotherapy-image-placeholder {
      width: 100%;
      height: 100%;
      background: linear-gradient(135deg, var(--pink-light), var(--blue-light));
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--blue-dark);
      font-size: 1.2rem;
      font-weight: 500;
      text-align: center;
      position: relative;
    }

    .psychotherapy-image-placeholder::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="25" cy="25" r="2" fill="%23E4B8C0" opacity="0.3"/><circle cx="75" cy="35" r="1.5" fill="%23688FCC" opacity="0.2"/><circle cx="45" cy="75" r="1" fill="%23D4AF37" opacity="0.4"/></svg>');
      animation: float 15s infinite linear;
    }

    .psychotherapy-decorative {
      position: absolute;
      top: -20px;
      right: -20px;
      width: 100px;
      height: 100px;
      background: var(--pink-primary);
      border-radius: 50%;
      opacity: 0.1;
      animation: floralFloat 4s ease-in-out infinite;
    }

    /* NOVA SEÇÃO - INFORMAÇÕES SOBRE PSICOTERAPIA */
    .therapy-info-section {
      padding: 5rem 2rem;
      background: var(--cream);
      position: relative;
    }

    .therapy-info-container {
      max-width: 1200px;
      margin: 0 auto;
    }

    .therapy-info-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 4rem;
      margin-bottom: 4rem;
      margin-left: 25%;
      margin-right: 25%;
    }

    .therapy-info-card {
      background: white;
      padding: 3rem;
      border-radius: 20px;
      box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
      border-left: 5px solid var(--pink-primary);
      position: relative;
    }

    .therapy-info-card h3 {
      font-size: 1.8rem;
      color: var(--blue-dark);
      margin-bottom: 1.5rem;
      display: flex;
      align-items: center;
      gap: 1rem;
    }

    .therapy-info-card .emoji {
      font-size: 2.5rem;
    }

    .therapy-info-card p {
      font-size: 1.05rem;
      color: var(--blue-medium);
      line-height: 1.7;
      margin-bottom: 1.5rem;
    }

    .therapy-info-card p:last-child {
      margin-bottom: 0;
    }

    .therapy-info-card strong {
      color: var(--blue-dark);
      font-weight: 600;
    }

    /* Seção Como Funciona */
    .how-it-works-section {
      padding: 5rem 2rem 0;
      background: var(--cream);
    }

    .how-it-works-container {
      max-width: 1200px;
      margin: 0 auto;
    }

    .how-it-works-title {
      font-size: 2.5rem;
      color: var(--blue-dark);
      text-align: center;
      margin-bottom: 4rem;
    }

    .modalities-grid {
      display: grid;
      grid-template-columns: 1fr 40px 1fr;
      gap: 0;
      align-items: center;
      margin-bottom: 3rem;
    }

    .modality-card {
      background: white;
      padding: 3rem 2.5rem;
      border-radius: 20px;
      box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
      text-align: center;
      position: relative;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    .modality-card.presencial {
      border-left: 5px solid var(--pink-primary);
    }

    .modality-card.online {
      border-right: 5px solid var(--blue-medium);
    }

    .modality-icon {
      font-size: 3rem;
      margin-bottom: 1.5rem;
    }

    .modality-card h3 {
      font-size: 1.6rem;
      color: var(--blue-dark);
      margin-bottom: 1.5rem;
      font-weight: 600;
    }

    .modality-card p {
      font-size: 1.05rem;
      color: var(--blue-medium);
      line-height: 1.7;
      margin: 0;
    }

    .connection-line {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
      position: relative;
    }

    .connection-line::before {
      content: '';
      position: absolute;
      width: 2px;
      height: 60px;
      background: linear-gradient(to bottom, var(--pink-primary), var(--blue-medium));
      border-radius: 2px;
    }

    .connection-line::after {
      content: '+';
      position: absolute;
      width: 30px;
      height: 30px;
      background: white;
      border: 2px solid var(--pink-primary);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.2rem;
      font-weight: bold;
      color: var(--pink-primary);
    }

    .faq-section {
      padding: 5rem 2rem;
      background: linear-gradient(135deg, var(--pink-light), var(--blue-light));
    }

    .faq-title {
      text-align: center;
      font-size: 2.5rem;
      color: var(--blue-dark);
      margin-bottom: 1rem;
    }

    .faq-subtitle {
      text-align: center;
      font-size: 1.6rem;
      color: var(--pink-primary);
      margin-bottom: 3rem;
    }

    .faq-container {
      max-width: 800px;
      margin: 0 auto;
    }

    .faq-item {
      background: white;
      margin-bottom: 1rem;
      border-radius: 15px;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
      overflow: hidden;
      transition: all 0.3s ease;
    }

    .faq-item:hover {
      box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
    }

    .faq-question {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1.5rem 2rem;
      cursor: pointer;
      font-size: 1.2rem;
      font-weight: 600;
      color: var(--blue-dark);
      background: white;
      border: none;
      width: 100%;
      text-align: left;
      transition: all 0.3s ease;
    }

    
    .faq-question:hover {
      background: rgba(228, 184, 192, 0.05);
    }
    .faq-question:focus {
      outline: none;
      box-shadow: 0 0 0 2px var(--pink-primary);
    }
    .faq-question.active {
      background: var(--pink-primary);
      color: white;
    }

    .faq-icon {
      font-size: 1.5rem;
      transition: transform 0.3s ease;
      color: var(--pink-primary);
    }

    .faq-question.active .faq-icon {
      transform: rotate(45deg);
      color: white;
    }

    .faq-answer {
      max-height: 0;
      overflow: hidden;
      transition: max-height 0.3s ease, padding 0.3s ease;
      background: rgba(228, 184, 192, 0.05);
    }

    .faq-answer.active {
      max-height: 500px;
      padding: 1.5rem 2rem;
    }

    .faq-answer p {
      font-size: 1rem;
      line-height: 1.6;
      color: var(--blue-medium);
      margin: 0;
    }

    .instagram-section {
      padding: 5rem 2rem;
      background: white;
    }

    .carousel-container {
      position: relative;
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 80px;
    }

    .carousel-wrapper {
      position: relative;
      width: 100%;
      height: 35rem;
      overflow: hidden;
    }

    .carousel-track {
      display: flex;
      transition: transform 0.5s ease;
      height: 100%;
    }

    .instagram-post {
      min-width: 320px;
      background: white;
      border-radius: 15px;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
      overflow: hidden;
      margin: 0 1rem;
      transition: transform 0.3s ease;
    }

    .instagram-post:hover {
      transform: translateY(-5px);
    }

    .post-image {
      height: 26rem;
      background: linear-gradient(135deg, var(--pink-light), var(--blue-light));
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--blue-medium);
      font-size: 1.1rem;
    }

    .post-content {
      padding: 1.5rem;
    }

    .post-stats {
      display: flex;
      gap: 1rem;
      margin-bottom: 1rem;
      color: var(--blue-medium);
      font-size: 0.9rem;
    }

    .post-description {
      color: var(--blue-dark);
      line-height: 1.6;
      font-size: 0.95rem;
    }

    .carousel-btn {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      background: var(--pink-primary);
      color: white;
      border: none;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      cursor: pointer;
      font-size: 1.2rem;
      transition: all 0.3s ease;
      z-index: 10;
      box-shadow: 0 4px 15px rgba(228, 184, 192, 0.3);
    }

    .carousel-btn:hover {
      background: var(--blue-medium);
      transform: translateY(-50%) scale(1.1);
      box-shadow: 0 6px 20px rgba(104, 143, 204, 0.4);
    }

    .carousel-btn.prev {
      left: -65px;
    }

    .carousel-btn.next {
      right: -65px;
    }

    .carousel-dots {
      display: flex;
      justify-content: center;
      gap: 0.5rem;
      margin-top: 2rem;
    }

    .dot {
      width: 12px;
      height: 12px;
      border-radius: 50%;
      background: var(--blue-light);
      cursor: pointer;
      transition: background 0.3s ease;
    }

    .dot.active {
      background: var(--pink-primary);
    }

    .reviews-location-section {
      padding: 5rem 2rem;
      background: linear-gradient(135deg, var(--pink-light), var(--blue-light));
      position: relative;
    }

    .reviews-location-grid {
      max-width: 1200px;
      margin: 0 auto;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 4rem;
    }

    .reviews-container,
    .location-container {
      background: white;
      padding: 3rem;
      border-radius: 20px;
      box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
    }

    .reviews-container h3,
    .location-container h3 {
      font-size: 2rem;
      color: var(--blue-dark);
      margin-bottom: 2rem;
      text-align: center;
    }

    .review-item {
      background: linear-gradient(135deg, var(--cream), var(--pink-light));
      padding: 1.5rem;
      border-radius: 15px;
      margin-bottom: 1.5rem;
      border-left: 4px solid var(--pink-primary);
    }

    .review-stars {
      color: var(--gold);
      font-size: 1.2rem;
      margin-bottom: 0.5rem;
    }

    .review-text {
      color: var(--blue-dark);
      font-style: italic;
      margin-bottom: 0.5rem;
    }

    .review-author {
      color: var(--blue-medium);
      font-size: 0.9rem;
      font-weight: 500;
    }

    .map-container {
      width: 100%;
      height: 300px;
      border-radius: 15px;
      overflow: hidden;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    }

    .location-info {
      margin-top: 2rem;
      padding: 1.5rem;
      background: var(--cream);
      border-radius: 15px;
      border-left: 4px solid var(--blue-medium);
    }

    .services-section {
      padding: 5rem 2rem;
      background: white;
    }

    .services-container {
      max-width: 1200px;
      margin: 0 auto;
      text-align: center;
    }

    .services-title {
      font-size: 2.8rem;
      color: var(--blue-dark);
      margin-bottom: 1rem;
      text-align: center;
    }

    .services-subtitle {
      font-size: 1.4rem;
      color: var(--pink-primary);
      margin-bottom: 4rem;
      text-align: center;
    }

    .services-grid-new {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2.5rem;
      margin-top: 3rem;
    }

    .service-card {
      background: white;
      padding: 3rem 2rem;
      border-radius: 25px;
      box-shadow: 0 15px 50px rgba(0, 0, 0, 0.1);
      transition: all 0.4s ease;
      position: relative;
      overflow: hidden;
      border: 2px solid transparent;
    }

    .service-card::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 5px;
      background: linear-gradient(135deg, var(--pink-primary), var(--blue-medium));
    }

    .service-card:hover {
      transform: translateY(-15px);
      box-shadow: 0 25px 60px rgba(0, 0, 0, 0.15);
      border-color: var(--pink-primary);
    }

    .service-card:nth-child(1) {
      background: linear-gradient(135deg, rgba(255, 216, 225, 0.3), rgba(255, 248, 245, 0.8));
    }

    .service-card:nth-child(2) {
      background: linear-gradient(135deg, rgba(219, 227, 235, 0.3), rgba(255, 248, 245, 0.8));
    }

    .service-card:nth-child(3) {
      background: linear-gradient(135deg, rgba(228, 184, 192, 0.3), rgba(255, 248, 245, 0.8));
    }

    .service-card:nth-child(4) {
      background: linear-gradient(135deg, rgba(104, 143, 204, 0.2), rgba(255, 248, 245, 0.8));
    }

    .service-icon {
      width: 80px;
      height: 80px;
      margin: 0 auto 2rem;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 2.2rem;
      color: white;
      position: relative;
    }

    .service-card:nth-child(1) .service-icon {
      background: linear-gradient(135deg, var(--pink-primary), #D4A677);
    }

    .service-card:nth-child(2) .service-icon {
      background: linear-gradient(135deg, var(--blue-medium), var(--blue-dark));
    }

    .service-card:nth-child(3) .service-icon {
      background: linear-gradient(135deg, var(--pink-primary), var(--blue-medium));
    }

    .service-card:nth-child(4) .service-icon {
      background: linear-gradient(135deg, var(--blue-dark), var(--pink-primary));
    }

    .service-card h3 {
      font-size: 1.5rem;
      color: var(--blue-dark);
      margin-bottom: 1.5rem;
      font-weight: 600;
    }

    .service-card p {
      color: var(--blue-medium);
      line-height: 1.7;
      font-size: 1rem;
    }

    .service-features {
      margin-top: 2rem;
      padding-top: 2rem;
      border-top: 1px solid rgba(228, 184, 192, 0.3);
    }

    .feature-list {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    .feature-list li {
      color: var(--blue-medium);
      margin-bottom: 0.5rem;
      font-size: 0.9rem;
      position: relative;
      padding-left: 1.5rem;
    }

    .feature-list li::before {
      content: '✓';
      position: absolute;
      left: 0;
      color: var(--pink-primary);
      font-weight: bold;
    }

    .emergency-notice {
      background: #f8f4f4;
      border: 2px solid #e74c3c;
      border-radius: 10px;
      padding: 1.5rem;
      margin: 2rem 0;
      text-align: center;
      font-size: 0.9rem;
      color: #333;
      line-height: 1.6;
    }

    .emergency-notice strong {
      color: #e74c3c;
    }

    .emergency-notice a {
      color: #e74c3c;
      text-decoration: underline;
      font-weight: bold;
    }

    footer {
      background: var(--blue-dark);
      color: white;
      padding: 3rem 2rem 1rem;
      text-align: center;
    }

    .footer-content {
      max-width: 1200px;
      margin: 0 auto;
    }

    .contact-info {
      margin-bottom: 2rem;
    }

    .contact-info h3 {
      font-size: 1.5rem;
      margin-bottom: 1rem;
      color: var(--pink-light);
    }

    .contact-info p {
      margin-bottom: 0.5rem;
    }

    /* Responsive Design - Ajustado */
    @media screen and (max-width: 768px) {
      html {
        font-size: 14px;
      }

      .container {
        padding: 0 1rem;
      }

      .hero h1 {
        font-size: 2.5rem;
      }

      .about-container,
      .reviews-location-grid,
      .psychotherapy-container {
        grid-template-columns: 1fr;
        gap: 2rem;
      }

      .psychotherapy-image-wrapper {
        order: -1;
        height: 250px;
      }

      .nav-links {
        display: none;
      }

      .mobile-menu-btn {
        display: block;
      }

      .mobile-menu-btn {
        z-index: 1002;
      }

      .color-grid {
        grid-template-columns: repeat(2, 1fr);
      }

      .floral-frame {
        width: 220px;
        height: 220px;
      }

      .profile-image {
        width: 190px;
        height: 190px;
      }

      .faq-grid {
        grid-template-columns: 1fr;
      }

      .instagram-post {
        min-width: 280px;
      }

      .carousel-btn {
        width: 40px;
        height: 40px;
        font-size: 1rem;
        display: none;
      }

      .services-grid-new {
        grid-template-columns: 1fr;
        gap: 2rem;
      }

      .service-card {
        padding: 2rem 1.5rem;
      }

      .cta-buttons {
        flex-direction: column;
        align-items: center;
      }

      .whatsapp-float {
        width: 50px;
        height: 50px;
        bottom: 20px;
        right: 20px;
      }

      .whatsapp-float svg {
        width: 28px;
        height: 28px;
      }

      .contact-info-simple {
        grid-template-columns: 1fr;
      }

      .carousel-container {
        padding: 0 20px;
      }

      .quote-text {
        font-size: 1.9rem;
      }

      .quote-author {
        font-size: 1.5rem;
      }

      .cta-consultation-title {
        font-size: 2rem;
      }

      .cta-consultation-button {
        padding: 1.2rem 2rem;
        font-size: 1rem;
      }

      .psychotherapy-content h2 {
        font-size: 2.2rem;
      }

      .main-whatsapp-button {
        padding: 1.2rem 2rem;
        font-size: 1rem;
      }

      nav {
        padding: 0 1rem;
      }

      .hero-content {
        padding: 0 1rem;
        // margin-bottom: 5rem;
      }

      .about-container {
        padding: 0 1rem;
      }

      /* Melhorias para mobile - about-text */
      .about-text {
        padding: 2.5rem 1.8rem;
        font-size: 1.15rem;
        line-height: 1.9;
      }

      /* Novas seções - responsivo */
      .therapy-info-grid {
        grid-template-columns: 1fr;
        gap: 2rem;
        margin-left: 2.5rem;
        margin-right: 2rem;
      }

      .therapy-info-card {
        padding: 2rem;
      }

      .therapy-info-card h3 {
        font-size: 1.5rem;
        flex-direction: column;
        text-align: center;
      }

      .modalities-grid {
        grid-template-columns: 1fr;
        gap: 2rem;
      }

      .connection-line {
        display: none;
      }

      .modality-card {
        padding: 2rem;
      }

      .how-it-works-title {
        font-size: 2rem;
      }
    }
    /* Media query para tablets */
    @media screen and (min-width: 769px) and (max-width: 1024px) {
      .container {
        max-width: 100%;
        padding: 0 2rem;
      }

      .about-container {
        grid-template-columns: 300px 1fr;
        gap: 3rem;
      }

      .psychotherapy-container {
        grid-template-columns: 1fr 400px;
        gap: 3rem;
      }

      .therapy-info-grid {
        gap: 3rem;
      }

      .modalities-grid {
        gap: 20px;
      }
    }

    /* ESTILOS PARA OPÇÃO 1 - FOTO ALINHADA AO TÍTULO */
.about-header {
  margin-bottom: 3rem;
}

.title-photo-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 4rem;
  margin-bottom: 2rem;
}

.title-wrapper h2 {
  font-size: 2.5rem;
  color: var(--blue-dark);
  margin-bottom: 0.5rem;
}

.title-wrapper .subtitle {
  font-size: 1.4rem;
  color: var(--pink-primary);
  margin-bottom: 0;
}

.profile-wrapper-inline {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
}

.about-content-full {
  max-width: 100%;
}

/* ESTILOS PARA OPÇÃO 2 - FOTO ABAIXO DO TÍTULO */
.about-header-centered {
  text-align: center;
  margin-bottom: 3rem;
}

.about-header-centered h2 {
  font-size: 2.5rem;
  color: var(--blue-dark);
  margin-bottom: 1rem;
}

.about-header-centered .subtitle {
  font-size: 2.4rem;
  color: var(--pink-primary);
  margin-bottom: 2rem;
}

.profile-wrapper-centered {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 3rem;
}

.about-content-centered {
  max-width: 800px;
  margin: 0 auto;
}

.about-button-centered {
  display: flex;
  justify-content: center;
  margin-top: 2rem;
  margin-bottom: 2rem;
}

/* RESPONSIVE PARA AMBAS AS OPÇÕES */
@media screen and (max-width: 768px) {
  .title-photo-container {
    flex-direction: column;
    gap: 2rem;
    text-align: center;
  }
  
  .title-wrapper h2 {
    font-size: 2rem;
  }
  
  .about-header-centered h2 {
    font-size: 2rem;
  }
  
  .floral-frame {
    width: 220px;
    height: 220px;
  }

  .profile-image {
    width: 190px;
    height: 190px;
  }
}
  .hero-content h1{
    font-size:1.7rem
  }
    .hero .description{
    font-size: 1rem;
    }
.cta-button{
padding: 0.5rem 1.5rem;
}

.hero{
min-height: 70vh;
}

  `}</style>
);


// ===== COMPONENTE HEADER =====
const Header = ({ mobileMenuOpen, handleMobileMenu, closeMobileMenu, handleSmoothScroll }) => {
  return (
    <header>
      <nav>
        <a href="#home" className="logo title-font" onClick={(e) => handleSmoothScroll(e, '#home')}>
          Amanda Becineri
        </a>
        <ul className={`nav-links ${mobileMenuOpen ? 'mobile-open' : ''}`}>
          <li><a href="#home" className="active" onClick={(e) => { handleSmoothScroll(e, '#home'); closeMobileMenu(); }}>Início</a></li>
          <li><a href="#about" onClick={(e) => { handleSmoothScroll(e, '#about'); closeMobileMenu(); }}>Sobre Mim</a></li>
          <li><a href="#psychotherapy" onClick={(e) => { handleSmoothScroll(e, '#psychotherapy'); closeMobileMenu(); }}>Psicoterapia</a></li>
          <li><a href="#therapy-info" onClick={(e) => { handleSmoothScroll(e, '#therapy-info'); closeMobileMenu(); }}>Como Funciona</a></li>
          <li><a href="#faq" onClick={(e) => { handleSmoothScroll(e, '#faq'); closeMobileMenu(); }}>FAQ</a></li>
          <li><a href="#reviews-location" onClick={(e) => { handleSmoothScroll(e, '#reviews-location'); closeMobileMenu(); }}>Localização</a></li>
          <li><a href="#instagram" onClick={(e) => { handleSmoothScroll(e, '#instagram'); closeMobileMenu(); }}>Instagram</a></li>
          <li><a href="#contact" onClick={(e) => { handleSmoothScroll(e, '#contact'); closeMobileMenu(); }}>Contato</a></li>
        </ul>
        <button className="mobile-menu-btn" onClick={handleMobileMenu}>
          {mobileMenuOpen ? '✕' : '☰'}
        </button>
      </nav>
    </header>
  );
};

// ===== COMPONENTE HERO =====
const HeroSection = ({ handleSmoothScroll }) => {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <h1 className="title-font">Boas vindas ao seu primeiro passo rumo à saúde mental!</h1>
        <p className="description body-font">Terapia presencial em Santos/SP ou on-line para todo o Brasil</p>
        <div className="cta-buttons">
          <a href="#contact" className="cta-button secondary" onClick={(e) => handleSmoothScroll(e, '#contact')}>
            Agendar minha primeira sessão agora
          </a>
        </div>
      </div>
      <div className="custom-shape-divider-bottom-1750090480">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            className="shape-fill">
          </path>
        </svg>
      </div>
    </section>
  );
};

import image from './assets/perfil.png'; // Importando a imagem do perfil
// ===== OPÇÃO 2: FOTO ABAIXO DO TÍTULO =====
const AboutSectionOption2 = ({ openWhatsApp }) => {
  return (
    <section className="about-section" id="about">
      <div className="container">
        <div className="about-header-centered">
          <h2 className="title-font scroll-animate">Quem sou eu?</h2>
          <p className="subtitle secondary-font scroll-animate">Amanda Becineri</p>
          
          <div className="profile-wrapper-centered scroll-animate-scale">
            <div className="floral-frame">
              <div className="petal"></div>
              <div className="petal"></div>
              <div className="petal"></div>
              <div className="petal"></div>
              <div className="profile-image">
                  <img
    src={image} 
    alt="Imagem"
    style={{ width: '16rem', height: '24rem', objectFit: 'cover' }}
  />
              </div>
            </div>
          </div>
        </div>
        
        <div className="about-content-centered scroll-animate">
          <div className="about-text body-font">
            <p>
              Oi, eu sou a Amanda, psicóloga (CRP 06/213856) ♡. Me baseio em três pilares que guiam minha escuta: <b>acolhimento, dedicação e psicanálise.</b>

            </p>
            <p>
              Acredito no poder de um espaço seguro, onde seja possível se ouvir com mais gentileza e encontrar novos sentidos para a própria história.
Durante a graduação, participei de intercâmbios com o México e o Peru, vivências que ampliaram meu olhar sobre o cuidado e a empatia.

            </p>
            <p>
              Atualmente, atuo com a abordagem psicanalítica e curso pós-graduação em Avaliação Psicológica, sempre buscando oferecer um atendimento sensível, profundo e ético.
            </p>
            <b>
              A terapia é esse lugar. E eu estou aqui para te acompanhar nesse processo com presença e escuta.
            </b>
          </div>
          
          <div className="about-button-centered">
            <a
              href="#"
              className="about-whatsapp-button"
              onClick={openWhatsApp}
            >
              <svg viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.051 3.488z" />
              </svg>
              Agendar Sessão
            </a>
          </div>
        </div>

        <div className="about-quote scroll-animate">
          <p className="quote-text title-font">
            "O que cura é o afeto: não há terapia sem simpatia."
          </p>
          <p className="quote-author secondary-font">
            Sándor Ferenczi (1932), psicanalista
          </p>
        </div>
      </div>
    </section>
  );
};


import escritorio from './assets/escritorio.jpg'; // Importando a imagem do perfil
// ===== COMPONENTE PSYCHOTHERAPY =====
const PsychotherapySection = () => {
  return (
    <section className="psychotherapy-section" id="psychotherapy">
      <div className="custom-shape-divider-top-1750090644">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>

      <div className="psychotherapy-container scroll-animate">
        <div className="psychotherapy-content">
          <h2 className="title-font">O que é psicoterapia?</h2>
          <div className="psychotherapy-text body-font">
            <p className="body-font">
              A psicoterapia é um espaço de cuidado emocional, onde você pode se
              escutar com mais verdade, se conhecer com mais profundidade e
              elaborar questões que, muitas vezes, nem sabia que carregava. É um
              processo que convida à honestidade interna, à escuta ativa e ao
              olhar gentil para quem somos.
            </p>
            <h3 className="title-font">Quanto tempo dura uma psicoterapia?</h3>
            <p className="body-font">
               Cada processo tem seu tempo, porque cada pessoa é única. Mas, em geral, as sessões duram entre 40 e 45 minutos, uma vez por semana. A duração do tratamento como um todo depende da sua demanda, do vínculo terapêutico e do ritmo de cada subjetividade.
            </p>
          </div>
        </div>

        <div className="psychotherapy-image-wrapper-mobile scroll-animate-right">
          <div className="psychotherapy-image-placeholder-mobile">
            <img
              src={escritorio} 
              alt="Imagem"
              style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '15%' }}
            />
          </div>
          <div className="psychotherapy-decorative"></div>
        </div>
      </div>
    </section>
  );
};

// ===== NOVA SEÇÃO - INFORMAÇÕES SOBRE PSICOTERAPIA =====
const TherapyInfoSection = ({ openWhatsApp }) => {
  return (
    <section className="therapy-info-section" id="therapy-info">
      <div className="therapy-info-container">
        <div className="therapy-info-grid">
          {/* className="therapy-info-card scroll-animate-left" */}
          <div >
            {/* <h3 className="title-font">
              <span className="emoji">🧠</span>
              O que é psicoterapia?
            </h3>
            <p className="body-font">
              A psicoterapia é um espaço de cuidado emocional, onde você pode se
              escutar com mais verdade, se conhecer com mais profundidade e
              elaborar questões que, muitas vezes, nem sabia que carregava. É um
              processo que convida à honestidade interna, à escuta ativa e ao
              olhar gentil para quem somos.
            </p>
            <p className="body-font">
              <strong>Quanto tempo dura uma psicoterapia?</strong> Cada processo tem seu tempo, porque cada pessoa é única. Mas, em geral, as sessões duram entre 40 e 45 minutos, uma vez por semana. A duração do tratamento como um todo depende da sua demanda, do vínculo terapêutico e do ritmo de cada subjetividade.
            </p> */}
          </div>

          <div className="therapy-info-card scroll-animate-right">
            <h3 className="title-font">
              <span className="emoji">🛋</span>
              Abordagem Psicanalítica
            </h3>
            <p className="body-font">
              É por meio da psicanálise que conduzo minha escuta clínica. Não se trata apenas de falar da infância ou deitar num divã. É um processo de escuta cuidadosa, onde olhamos para o que se repete, para o que escapa, para os afetos que teimam em voltar. Trabalho com base nas contribuições de Sigmund Freud, Donald Winnicott e Melanie Klein.
            </p>
            <p className="body-font">
              A escuta psicanalítica é silenciosa, mas potente. Acolhe não só o que é dito, mas também o que é calado. E sustenta, sem pressa, os movimentos internos que surgem quando somos ouvidos com verdade.
            </p>
          </div>
        </div>

        {/* Seção Como Funciona */}
        <div className="how-it-works-section">
          <div className="how-it-works-container">
            <h2 className="how-it-works-title title-font scroll-animate">Como Funciona?</h2>
            
            <div className="modalities-grid scroll-animate">
              <div className="modality-card presencial">
                <div className="modality-icon">📍</div>
                <h3 className="title-font">Psicoterapia presencial</h3>
                <p className="body-font">
                  É o encontro físico entre paciente e terapeuta. Nesse espaço, estamos corpo a corpo, percebendo nuances da linguagem, respiração, pausas... Tudo vira matéria para pensar junto. A sala se torna um "ambiente terapêutico" onde emoções podem ser acolhidas sem pressa, com todo o cuidado.
                </p>
              </div>

              <div className="connection-line"></div>

              <div className="modality-card online">
                <div className="modality-icon">💻</div>
                <h3 className="title-font">Psicoterapia online</h3>
                <p className="body-font">
                  Como no encontro presencial, com a mesma seriedade, qualidade e conexão, a terapia online se mostrou igualmente eficaz, segundo diversas pesquisas. Ela amplia o acesso ao cuidado psicológico e também oferece segurança, privacidade e intimidade, mesmo à distância. A eficácia da terapia online é reconhecida por estudos como o de Backhaus et al. (2012), mostrando resultados equivalentes ao atendimento presencial.
                </p>
              </div>
            </div>
          </div>
          <div className="about-button-centered">
            <a
              href="#"
              className="about-whatsapp-button"
              onClick={openWhatsApp}
            >
              <svg viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.051 3.488z" />
              </svg>
              Agendar Sessão
            </a>
          </div>        
        </div>
       

      </div>

      <div className="custom-shape-divider-bottom-1750092370">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
    </section>
  );
};

// ===== COMPONENTE FAQ =====
const FAQSection = ({ activeFAQ, handleFAQClick }) => {
  const faqData = [
    {
      question: "É preciso ter um \"motivo\" específico para começar a terapia?",
      answer:
        "Não. A terapia também é um espaço de prevenção, escuta e autoconhecimento. Você não precisa \"estar mal\" para começar - basta sentir vontade de olhar para si com mais profundidade.",
    },
    {
      question: "A psicanálise tem fim?",
      answer: "Pode ter. Mas não costuma seguir um roteiro fechado. O fim se constrói no processo, com base no que foi elaborado, no que se transformou e no que o sujeito deseja dali em diante. Não é algo imposto, e sim construído junto.",
    },
    {
      question: "Preciso contar tudo logo nas primeiras sessões?",
      answer: "Não. A confiança se constrói aos poucos. Você pode ir se abrindo no seu tempo, sem pressa, respeitando seus limites e sentindo se o espaço é seguro para isso.",
    },
    {
      question: "O que posso falar na terapia?",
      answer:
        "Tudo. Absolutamente tudo. Não existe assunto \"sem importância\" para quem escuta com profundidade. A cada fala, a gente se aproxima de quem você é.",
    },
    {
      question: "A psicanálise serve para qualquer pessoa?",
      answer:
        "Serve para quem deseja se conhecer com profundidade. Pode não ser a abordagem ideal se você busca respostas prontas ou conselhos diretos. Aqui, a gente caminha junto para construir sentido.",
    },
    {
      question: "A psicoterapia com abordagem psicanalítica pode ajudar a tratar transtornos como TAG (Transtorno de Ansiedade Generalizada)?",
      answer:
        "Sim. A psicanálise não trata apenas \"sintomas\", mas busca compreender o que está por trás deles. A ansiedade, por exemplo, pode estar ligada a conflitos inconscientes, expectativas internas ou vivências antigas que precisam ser elaboradas.",
    },
  ];

  return (
    <section className="faq-section" id="faq">
      <div className="container">
        <h2 className="faq-title title-font scroll-animate">Perguntas Frequentes</h2>
        <p className="faq-subtitle secondary-font scroll-animate">FAQ</p>
        <div className="faq-container">
          {faqData.map((faq, index) => (
            <div key={index} className={`faq-item scroll-animate scroll-animate-delay-${(index % 4) + 1}`}>
              <button 
                className={`faq-question title-font ${activeFAQ === index ? 'active' : ''}`}
                onClick={() => handleFAQClick(index)}
              >
                {faq.question}
                <span className="faq-icon">+</span>
              </button>
              <div className={`faq-answer ${activeFAQ === index ? 'active' : ''}`}>
                <p className="body-font">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ===== COMPONENTE REVIEWS E LOCATION =====
const ReviewsLocationSection = ({ openWhatsApp }) => {
  return (
    <section className="reviews-location-section" id="reviews-location">
      <div className="reviews-location-grid">
        <div className="reviews-container scroll-animate-left">
          <h3 className="title-font">Reviews do Google</h3>

          <div className="review-item">
            <div className="review-stars">⭐⭐⭐⭐⭐</div>
            <p className="review-text body-font">"Ótima experiência! Amanda é uma ótima profissional, sessões muito acolhedoras e muito funcionais. Gratidão pelo desenvolvimento que estamos tendo."</p>
            <p className="review-author">- Paciente N.</p>
          </div>

          <div className="review-item">
            <div className="review-stars">⭐⭐⭐⭐⭐</div>
            <p className="review-text body-font">"Está sendo uma ótima experiencia!! Sempre fico ansiosa esperando a próxima sessão!! Hahaha. Recomendo!!!"</p>
            <p className="review-author">- Paciente C.</p>
          </div>

          <div className="review-item">
            <div className="review-stars">⭐⭐⭐⭐⭐</div>
            <p className="review-text body-font">"Ótima profissional! Atenciosa e dedicada, recomendo!!"</p>
            <p className="review-author">- Paciente B.</p>
          </div>
        </div>

        <div className="location-container scroll-animate-right">
          <h3 className="title-font">Onde me Encontrar</h3>

          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3645.8598158623704!2d-46.32597182429713!3d-23.96539677852437!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce03a9c60bd533%3A0xaa09c3893a02024!2sAv.%20Conselheiro%20N%C3%A9bias%2C%20703%20-%20Boqueir%C3%A3o%2C%20Santos%20-%20SP%2C%2011045-003!5e0!3m2!1spt-BR!2sbr!4v1751127182902!5m2!1spt-BR!2sbr"
              width="100%" 
              height="100%" 
              style={{border: 0}} 
              allowFullScreen="" 
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade">
            </iframe>
          </div>

          <div className="location-info">
            <h4 className="title-font" style={{color: 'var(--blue-dark)', marginBottom: '1rem'}}>Informações de Localização</h4>
            <p className="body-font" style={{color: 'var(--blue-medium)', marginBottom: '0.5rem'}}>📍 <strong>Endereço: </strong>
              Av. Conselheiro Nébias, 703 - Santos/SP - 11045-003</p>
            <p className="body-font" style={{color: 'var(--blue-medium)', marginBottom: '0.5rem'}}>🏢 <strong>Edifício: </strong>
              Unique Offices</p>
            <p className="body-font" style={{color: 'var(--blue-medium)', marginBottom: '0.5rem'}}>🚗
              <strong>Estacionamento: </strong>Disponível no local</p>
            {/* <p className="body-font" style={{color: 'var(--blue-medium)'}}>🚌 <strong>Transporte público:</strong> Próximo às
              estações de metrô</p> */}
          </div>
        </div>
      </div>
                <div className="about-button-centered">
            <a
              href="#"
              className="about-whatsapp-button"
              onClick={openWhatsApp}
            >
              <svg viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.051 3.488z" />
              </svg>
              Agendar Sessão
            </a>
          </div>
      <div className="custom-shape-divider-bottom-1750364760">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="shape-fill">
          </path>
        </svg>
      </div>
    </section>
  );
};

import post1 from './assets/post1.png'; // Importando a imagem do post 1
import post2 from './assets/post2.png'; // Importando a imagem do post 2
import post3 from './assets/post3.png'; // Importando a imagem do post 3   
import post4 from './assets/post4.png'; // Importando a imagem do post 4
import post5 from './assets/post5.png'; // Importando a imagem do post 5 
// ===== COMPONENTE INSTAGRAM =====
const InstagramSection = ({ currentCarouselIndex, setCurrentCarouselIndex, carouselRef, nextSlide, prevSlide }) => {
  const instagramPosts = [
    {
      title:
        <>
          <img
            src={post1}
            alt="Imagem"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </>,
      likes: 110,
      comments: 22,
      description: `Muito prazer, eu sou Amanda Becineri
Psicóloga que acredita na força do cuidado, da escuta e do autoconhecimento.

Se você já está por aqui há um tempo, fico feliz em ter você comigo!

Se está chegando agora, seja bem-vinda! Sinta-se acolhida, afinal, esse espaço também é seu 💙`,
      link: "https://www.instagram.com/p/DJRme0kJiIY/?igsh=bmZ0aXh6bHhod3Fy"
    },
    {
      title:
        <>
          <img
            src={post2}
            alt="Imagem"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </>,
      likes: 116,
      comments: 12,
      description: `Tudo que você precisa saber sobre as sessões de terapia comigo 💙

Minhas sessões são um espaço seguro para você falar sobre suas angústias, desafios e sobre tuas emoções. Com a psicanálise, a terapia te ajuda a entender  por que você sente o que sente, age como age e repete certos padrões.

Com uma abordagem fundamentada na teoria psicanalítica, bem embasada e contemporânea, te ajudo a acessar as raízes dos seus sentimentos e transformar sua relação consigo mesma.

📍 Atendimento presencial em Santos/SP e online para todo o Brasil.

Agende sua sessão pelo link na bio.

CRP 06/213856`,
      link: "https://www.instagram.com/p/DHYqN1Fp4Gk/?igsh=MW0zd2ZnaW5oNm42Yg%3D%3D"
    },
    {
      title:
        <>
          <img
            src={post3}
            alt="Imagem"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </>,
      likes: 50,
      comments: 6,
      description: `Você já pensou em fazer terapia, porém… sempre aparece um “mas” no meio do caminho?

Talvez você ache que terapia é só pra quem tá no limite, ou que não vai saber o que dizer, ou ainda que “não dá pra mexer no passado agora”…A verdade é: você não precisa esperar tudo desabar pra procurar ajuda. É hora de parar de inventar desculpas.

📩 E se quiser conversar sobre isso, eu tô aqui para te ouvir! 💕`,
      link: "https://www.instagram.com/p/DKe5ObNJBAh/?igsh=MTBzbXZienBiYmgzNw%3D%3D"
    },
    {
      title:
        <>
          <img
            src={post4}
            alt="Imagem"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </>,
      likes: 31,
      comments: 15,
      description: `Hoje é Dia do Psicanalista, e o coração aqui tá cheio de gratidão e orgulho por esse caminho que escolhi estar trilhando que, na verdade, me escolheu também 💙

A cada sessão, carrego comigo não só o desejo de escutar com presença, mas também a sabedoria de quem abriu caminho pra isso ser possível: Freud, Klein e Winnicott. 

Eles me ensinam todos os dias que ouvir é também cuidar. Que o silêncio pode acolher. E que existe muito por trás de cada palavra dita... e não dita.

Essa profissão me emociona, me desafia e me transforma - porque escutar alguém de verdade é um ato profundo de amor e respeito.

Se esse post despertou algo aí dentro, talvez seja hora de se ouvir com mais carinho.

A terapia pode ser esse lugar seguro, e eu estou aqui, pronta pra te acompanhar nessa jornada.Feliz dia pra quem escuta com a alma. 

E feliz dia pra quem decide se escutar também.

Com carinho, 
Amanda Becineri - CRP 213856`,
      link: "https://www.instagram.com/p/DJUMZgtJhmM/?igsh=M3p4YWg5bmhxcTk1"
    },
    {
      title:
        <>
          <img
            src={post5}
            alt="Imagem"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </>,
      likes: 53,
      comments: 4,
      description: `Você muda de humor e já se chama de “bipolar”? Calma. Isso pode não ser o que você pensa.

Mudar de ideia, ter altos e baixos no mesmo dia, rir e chorar quase ao mesmo tempo… faz parte de ser humano, sabia?

Nem todo mundo que oscila emocionalmente está vivendo um transtorno bipolar. E isso não diminui sua dor, mas ajuda a entender o que realmente tá acontecendo aí dentro.

💌 E se quiser conversar sobre o que tá te atravessando, minha escuta está aberta na terapia.`,
      link: "https://www.instagram.com/p/DKkraqApyM9/?igsh=MWg0cmdjZnRoNTZzbQ%3D%3D"
    }
  ];

  return (
    <section className="instagram-section" id="instagram">
      <div className="container">
        <h2 className="section-title title-font scroll-animate">Últimos Posts do Instagram</h2>
        <div className="carousel-container scroll-animate-scale">
          <div className="carousel-wrapper">
            <div className="carousel-track" ref={carouselRef}>
              {instagramPosts.map((post, index) => (
                <div key={index} className="instagram-post">
                  <a href={post.link} target='_blank' rel='noopener noreferrer' className="post-image">
                      {post.title}
                  </a>
                  <div className="post-content">
                    <div className="post-stats">
                      <span>❤️ {post.likes} likes</span>
                      <span>💬 {post.comments} comentários</span>
                    </div>
                    <p className="post-description body-font">
                      {post.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button className="carousel-btn prev" onClick={prevSlide}>‹</button>
          <button className="carousel-btn next" onClick={nextSlide}>›</button>

          <div className="carousel-dots">
            {[0, 1, 2, 3, 4].map((index) => (
              <span
                key={index}
                className={`dot ${currentCarouselIndex === index ? 'active' : ''}`}
                onClick={() => setCurrentCarouselIndex(index)}
              ></span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// ===== COMPONENTE CONTACT =====
const ContactSection = ({ openWhatsApp }) => {
  return (
    <section className="contact-section" id="contact">
      <div className="custom-shape-divider-top-1750364793">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="shape-fill">
          </path>
        </svg>
      </div>
      <div className="contact-container">
        <h1 className="contact-title title-font scroll-animate">Dê o primeiro passo agora</h1>
        <p className="contact-subtitle body-font scroll-animate">Você tem todo o meu apoio no seu processo, que é único</p>

        <a href="#" className="main-whatsapp-button scroll-animate-scale" onClick={openWhatsApp}>
          <svg viewBox="0 0 24 24">
            <path
              d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.051 3.488z" />
          </svg>
          Agendar Sessão via WhatsApp
        </a>

        <div className="contact-info-simple scroll-animate">
          <div className="contact-info-item">
            <h4>WhatsApp</h4>
            <p>+55 (13) 98159-7393</p>
          </div>
          <div className="contact-info-item">
            <h4>E-mail</h4>
            <p>amandafmbecineri@gmail.com</p>
          </div>
          <div className="contact-info-item">
            <h4>Horários</h4>
            <p>Segunda à Sexta: 9h às 21h</p>
            <p>Sábado: 9h às 12h</p>
          </div>
          <div className="contact-info-item">
            <h4>Localização</h4>
            <p>Santos - SP</p>
          </div>
        </div>
      </div>
    </section>
  );
};

// ===== COMPONENTE FOOTER =====
const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="contact-info">
          <h3 className="title-font">Amanda de Freitas Moura Becineri - CRP (06/213856)</h3>
          {/* <p className="body-font">CRP 06/123456</p> */}
          <p className="body-font">Cuidado especializado em saúde mental</p>
        </div>

        <div className="emergency-notice">
          <strong>Aviso:</strong> Esta página não se destina ao suporte em
          momentos de emergência emocional ou em situações de risco iminente à
          vida. Caso esteja passando por uma crise, entre em contato com o
          <b> Centro de Valorização da Vida (CVV)</b> pelo número <b>188</b> ou acesse o site <a href='https://www.cvv.org.br' target='_blank'>www.cvv.org.br</a>. Em casos urgentes, procure o serviço de atendimento de 
          emergência mais próximo de você.
        </div>

        <p className="body-font">
          &copy; 2025 Amanda Becineri. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

// ===== COMPONENTE WHATSAPP FLOAT =====
const WhatsAppFloat = ({ openWhatsApp }) => {
  return (
    <div className="whatsapp-float" onClick={openWhatsApp}>
      <svg viewBox="0 0 24 24">
        <path
          d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.051 3.488z" />
      </svg>
    </div>
  );
};

// ===== COMPONENTE PRINCIPAL =====
const AmandaBecineriSite = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentCarouselIndex, setCurrentCarouselIndex] = useState(0);
  const [activeFAQ, setActiveFAQ] = useState(null);
  const carouselRef = useRef(null);
  const autoPlayRef = useRef(null);

  // Header scroll effects
  useEffect(() => {
    let lastScrollTop = 0;
    let ticking = false;

    const updateHeader = () => {
      const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
      const header = document.querySelector('header');

      if (window.innerWidth <= 768) {
        if (currentScroll > lastScrollTop && currentScroll > 100) {
          header.classList.add('hidden');
        } else {
          header.classList.remove('hidden');
        }
      } else {
        header.classList.remove('hidden');
      }

      if (currentScroll > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }

      lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
      ticking = false;
    };

    const requestTick = () => {
      if (!ticking) {
        requestAnimationFrame(updateHeader);
        ticking = true;
      }
    };

    window.addEventListener('scroll', requestTick);
    window.addEventListener('resize', () => {
      if (window.innerWidth > 768) {
        document.querySelector('header').classList.remove('hidden');
      }
    });

    return () => {
      window.removeEventListener('scroll', requestTick);
    };
  }, []);

  // Scroll animations
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.scroll-animate, .scroll-animate-left, .scroll-animate-right, .scroll-animate-scale').forEach(el => {
      observer.observe(el);
    });

    // Active menu tracking
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      const navItems = document.querySelectorAll('.nav-links a[href^="#"]');
      let currentSection = '';
      
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
          currentSection = section.getAttribute('id');
        }
      });

      navItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href') === `#${currentSection}`) {
          item.classList.add('active');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    setTimeout(() => {
      const elementsInView = document.querySelectorAll('.scroll-animate, .scroll-animate-left, .scroll-animate-right, .scroll-animate-scale');
      elementsInView.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          el.classList.add('animate');
        }
      });
    }, 100);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Carousel functionality
  useEffect(() => {
  const startAutoPlay = () => {
    autoPlayRef.current = setInterval(() => {
      setCurrentCarouselIndex(prev => (prev + 1) % 5); // Mudança de 3 para 5
    }, 10000000);
  };

  const stopAutoPlay = () => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
      autoPlayRef.current = null;
    }
  };

  startAutoPlay();

  return () => stopAutoPlay();
}, []);

  // Update carousel position
  useEffect(() => {
    if (carouselRef.current) {
      const posts = carouselRef.current.querySelectorAll('.instagram-post');
      if (posts.length > 0) {
        const postWidth = posts[0].offsetWidth + 32;
        carouselRef.current.style.transform = `translateX(-${currentCarouselIndex * postWidth}px)`;
      }
    }
  }, [currentCarouselIndex]);

  const openWhatsApp = () => {
    const phoneNumber = "5513981597393";
    const message = "Olá! Gostaria de agendar uma Sessão com a Amanda.";
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
  };

  const handleSmoothScroll = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const handleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const handleFAQClick = (index) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

 // Funções de navegação
const nextSlide = () => {
  setCurrentCarouselIndex(prev => (prev + 1) % 5); // Mudança de 3 para 5
};

const prevSlide = () => {
  setCurrentCarouselIndex(prev => prev === 0 ? 4 : prev - 1); // Mudança de 2 para 4
};

  return (
    <>
      {/* Meta tags para responsividade */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      
      <GlobalStyles />
      
      <div className="App" style={{width: '100%', minHeight: '100vh', position: 'relative'}}>
        <Header 
          mobileMenuOpen={mobileMenuOpen}
          handleMobileMenu={handleMobileMenu}
          closeMobileMenu={closeMobileMenu}
          handleSmoothScroll={handleSmoothScroll}
        />

        <HeroSection handleSmoothScroll={handleSmoothScroll} />

        {/* <AboutSection openWhatsApp={openWhatsApp} />
        <AboutSectionOption1 openWhatsApp={openWhatsApp} /> */}
        <AboutSectionOption2 openWhatsApp={openWhatsApp} />


        <PsychotherapySection />

        <TherapyInfoSection openWhatsApp={openWhatsApp}/>

        <FAQSection 
          activeFAQ={activeFAQ} 
          handleFAQClick={handleFAQClick} 
        />

        <ReviewsLocationSection openWhatsApp={openWhatsApp} />

        <InstagramSection 
          currentCarouselIndex={currentCarouselIndex}
          setCurrentCarouselIndex={setCurrentCarouselIndex}
          carouselRef={carouselRef}
          nextSlide={nextSlide}
          prevSlide={prevSlide}
        />

        <ContactSection openWhatsApp={openWhatsApp} />

        <Footer />

        <WhatsAppFloat openWhatsApp={openWhatsApp} />
      </div>
    </>
  );
};

export default AmandaBecineriSite;