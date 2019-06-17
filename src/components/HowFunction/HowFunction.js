import React, { Component } from "react" ;
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.scss";
import IconConsume from '../../assets/images/consume-funciones.svg';
import IconBuild from '../../assets/images/contruye-tu-proyecto.svg';
import IconVideoPlayer from '../../assets/images/video-player.svg';

import './HowFunction.scss';
import {CopyToClipboard} from 'react-copy-to-clipboard';



class HowFunction extends React.Component {
  state = {
    value: 'functions.poetri.co/*function',
    copied: false,
  };
  stateTwo = {
    value: 'npm i -g @poetri/cli',
    copied: false,
  };
  stateThree = {
    value: 'poetri init',
    copied: false,
  };

  render() {
  return(
  <div className="section-how-function container">
    <div className="section-how-function__title">
      <h2>¿Comó funciona?</h2>
      <p>Poetri es versatilidad:</p>
      <a href="/">Ver Documentación</a>
    </div>
    <Tabs defaultIndex = {-1}>
      <TabList>
        <Tab>
          <div className="react-tabs__tab-contain">
            <span className="icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="57" height="57" viewBox="0 0 57 57" fill="none">
                <g clip-path="url(#clip0)">
                <path d="M56.6738 10.3456L51.3301 5.00185C51.0118 4.68352 50.533 4.58828 50.1168 4.76049C49.701 4.9327 49.4297 5.33844 49.4297 5.78897V6.90225H33.5098C32.8949 6.90225 32.3965 7.40062 32.3965 8.01553C32.3965 8.63001 32.8949 9.12881 33.5098 9.12881H50.543C51.0205 9.12881 51.4275 8.82831 51.5858 8.40605L54.3125 11.1327L51.5858 13.8594C51.4275 13.4371 51.0205 13.1366 50.543 13.1366H43.2397C43.2327 13.1366 43.2258 13.1366 43.2184 13.1366H28.5C20.0286 13.1366 13.1367 20.0285 13.1367 28.4999C13.1367 36.9713 20.0286 43.8632 28.5 43.8632C36.9714 43.8632 43.8633 36.9713 43.8633 28.4999C43.8633 22.94 40.8944 18.0603 36.4591 15.3632H42.7361C46.0511 18.9513 47.8711 23.598 47.8711 28.4999C47.8711 39.1813 39.1814 47.871 28.5 47.871C17.8186 47.871 9.12891 39.1813 9.12891 28.4999C9.12891 19.5863 15.1606 11.8568 23.7973 9.70328C24.3939 9.55456 24.757 8.95008 24.6083 8.35387C24.4596 7.75722 23.8551 7.3941 23.2584 7.54282C18.6666 8.68785 14.5114 11.3732 11.5577 15.104C8.51225 18.9509 6.90234 23.5832 6.90234 28.4999C6.90234 33.4384 8.56966 37.9941 11.3694 41.6366H7.57031V40.5233C7.57031 40.0728 7.29895 39.6671 6.88321 39.4949C6.46703 39.3227 5.98824 39.4179 5.66991 39.7362L0.326157 45.08C-0.108719 45.5144 -0.108719 46.2193 0.326157 46.6542L5.66991 51.998C5.883 52.2111 6.1674 52.3241 6.45703 52.3241C6.60054 52.3241 6.74535 52.2963 6.88321 52.2393C7.29895 52.0671 7.57031 51.6609 7.57031 51.2108V50.0976H28.5C40.4091 50.0976 50.0977 40.409 50.0977 28.4999C50.0977 23.6984 48.5308 19.1179 45.6445 15.3632H49.4297V16.4765C49.4297 16.9266 49.701 17.3327 50.1168 17.5049C50.2546 17.5619 50.399 17.5898 50.5425 17.5898C50.8326 17.5898 51.117 17.4767 51.3301 17.2636L56.6738 11.9198C57.1087 11.485 57.1087 10.78 56.6738 10.3456ZM41.6367 28.4999C41.6367 35.7432 35.7437 41.6366 28.5 41.6366C21.2563 41.6366 15.3633 35.7432 15.3633 28.4999C15.3633 21.2562 21.2563 15.3632 28.5 15.3632C35.7437 15.3632 41.6367 21.2562 41.6367 28.4999ZM6.45703 47.871C5.97954 47.871 5.57249 48.1715 5.4142 48.5938L2.68753 45.8671L5.4142 43.1404C5.57249 43.5627 5.97954 43.8632 6.45703 43.8632H13.3363C14.9754 45.4814 16.8714 46.8395 18.9567 47.871H6.45703Z" fill="#363636"/>
                <path d="M27.732 29.3016C27.9494 29.5186 28.2343 29.6273 28.5191 29.6273C28.804 29.6273 29.0888 29.5186 29.3062 29.3016L35.3675 23.2399C35.8024 22.805 35.8024 22.1001 35.3675 21.6652C34.9331 21.2307 34.2282 21.2307 33.7933 21.6652L28.5187 26.9398L26.0425 24.4636C25.6081 24.0287 24.9031 24.0287 24.4682 24.4636C24.0334 24.898 24.0334 25.603 24.4682 26.0379L27.732 29.3016Z" fill="#363636"/>
                <path d="M28.5 19.8164C28.7927 19.8164 29.0801 19.6973 29.2871 19.4902C29.4941 19.2832 29.6133 18.9958 29.6133 18.7031C29.6133 18.4105 29.4941 18.123 29.2871 17.916C29.0801 17.709 28.7927 17.5898 28.5 17.5898C28.2073 17.5898 27.9199 17.709 27.7129 17.916C27.5059 18.123 27.3867 18.4105 27.3867 18.7031C27.3867 18.9958 27.5059 19.2832 27.7129 19.4902C27.9199 19.6973 28.2073 19.8164 28.5 19.8164Z" fill="#363636"/>
                <path d="M28.5 37.1836C28.2073 37.1836 27.9199 37.3027 27.7129 37.5098C27.5059 37.7168 27.3867 38.0042 27.3867 38.2969C27.3867 38.5895 27.5059 38.877 27.7129 39.084C27.9199 39.291 28.2073 39.4102 28.5 39.4102C28.7927 39.4102 29.0801 39.291 29.2871 39.084C29.4941 38.877 29.6133 38.5895 29.6133 38.2969C29.6133 38.0042 29.4941 37.7168 29.2871 37.5098C29.0801 37.3027 28.7927 37.1836 28.5 37.1836Z" fill="#363636"/>
                <path d="M38.2969 29.6133C38.5895 29.6133 38.877 29.4941 39.084 29.2871C39.291 29.0801 39.4102 28.7927 39.4102 28.5C39.4102 28.2073 39.291 27.9199 39.084 27.7129C38.877 27.5059 38.5895 27.3867 38.2969 27.3867C38.0042 27.3867 37.7168 27.5059 37.5098 27.7129C37.3027 27.9199 37.1836 28.206 37.1836 28.5C37.1836 28.7927 37.3027 29.0801 37.5098 29.2871C37.7168 29.4941 38.0042 29.6133 38.2969 29.6133Z" fill="#363636"/>
                <path d="M17.916 27.7129C17.709 27.9199 17.5898 28.2073 17.5898 28.5C17.5898 28.7927 17.709 29.0801 17.916 29.2871C18.123 29.4941 18.4105 29.6133 18.7031 29.6133C18.9958 29.6133 19.2832 29.4941 19.4902 29.2871C19.6973 29.0801 19.8164 28.7927 19.8164 28.5C19.8164 28.2073 19.6973 27.9199 19.4902 27.7129C19.2832 27.5059 18.9958 27.3867 18.7031 27.3867C18.4105 27.3867 18.123 27.5059 17.916 27.7129Z" fill="#363636"/>
                <path d="M28.5 9.12891C28.7927 9.12891 29.0801 9.00975 29.2871 8.80275C29.4941 8.59575 29.6133 8.3083 29.6133 8.01562C29.6133 7.72295 29.4941 7.4355 29.2871 7.2285C29.0801 7.0215 28.7927 6.90234 28.5 6.90234C28.2073 6.90234 27.9199 7.0215 27.7129 7.2285C27.5059 7.4355 27.3867 7.72295 27.3867 8.01562C27.3867 8.3083 27.5059 8.59575 27.7129 8.80275C27.9199 9.00975 28.2073 9.12891 28.5 9.12891Z" fill="#363636"/>
                </g>
                <defs>
                <clipPath id="clip0">
                <rect width="57" height="57" fill="white"/>
                </clipPath>
                </defs>
            </svg>
            </span>
            <div className="descrip">
              <h4>Consume funciones</h4>
              <p>Ahorra tiempo y dinero en el desarrollo de funciones. paga unicamente las ejecuciones que consumes.</p>
            </div>
          </div>
        </Tab>
        <Tab>
          <div className="react-tabs__tab-contain">
            <span className="icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="63" height="63" viewBox="0 0 63 63" fill="none">
                <g clip-path="url(#clip0)">
                <path d="M31.5 38.6128C28.6987 38.6128 26.4194 40.8921 26.4194 43.6934C26.4194 46.4947 28.6987 48.7741 31.5 48.7741C34.3013 48.7741 36.5807 46.4947 36.5807 43.6934C36.5807 40.8921 34.3013 38.6128 31.5 38.6128ZM31.5 46.7418C29.8195 46.7418 28.4516 45.3739 28.4516 43.6934C28.4516 42.013 29.8195 40.6451 31.5 40.6451C33.1805 40.6451 34.5484 42.013 34.5484 43.6934C34.5484 45.3739 33.1805 46.7418 31.5 46.7418Z" fill="#363636"/>
                <path d="M30.4839 4.06445H38.6129V6.09671H30.4839V4.06445Z" fill="#363636"/>
                <path d="M30.4839 8.12915H38.6129V10.1614H30.4839V8.12915Z" fill="#363636"/>
                <path d="M24.3871 12.1936H38.6129V14.2259H24.3871V12.1936Z" fill="#363636"/>
                <path d="M24.3871 16.2581H38.6129V18.2903H24.3871V16.2581Z" fill="#363636"/>
                <path d="M24.3871 20.3225H38.6129V22.3548H24.3871V20.3225Z" fill="#363636"/>
                <path d="M63 32.5161V24.3871H48.7742V32.5161H54.871V42.6774H42.6774V40.9285L40.1827 40.0964L41.3586 37.7451L37.4484 33.8349L35.0961 35.0118L34.2651 32.5161H32.5161V26.4194H42.6774V14.2258H54.871V19.9018L52.541 17.5719L51.1041 19.0088L55.8871 23.7917L60.67 19.0088L59.2332 17.5719L56.9032 19.9018V12.1935H42.6774V0H27.0147L20.3226 6.69216V12.1935H6.09677V19.9018L3.76682 17.5719L2.32995 19.0088L7.1129 23.7917L11.8959 19.0088L10.459 17.5719L8.12903 19.9018V14.2258H20.3226V26.4194H30.4839V32.5161H28.7349L27.9039 35.0118L25.5516 33.8349L21.6414 37.7451L22.8173 40.0964L20.3226 40.9285V42.6774H8.12903V32.5161H14.2258V24.3871H0V32.5161H6.09677V48.9186C4.34782 49.3726 3.04839 50.9508 3.04839 52.8387C3.04839 55.0803 4.87127 56.9032 7.1129 56.9032C9.35454 56.9032 11.1774 55.0803 11.1774 52.8387C11.1774 50.9508 9.87799 49.3726 8.12903 48.9186V44.7097H14.2258V57.0903C13.0459 57.511 12.1935 58.6289 12.1935 59.9516C12.1935 61.6321 13.5615 63 15.2419 63C16.9224 63 18.2903 61.6321 18.2903 59.9516C18.2903 58.6289 17.4379 57.511 16.2581 57.0903V44.7097H20.3226V46.4586L22.8173 47.2907L21.6414 49.642L25.5516 53.5522L27.9039 52.3753L28.7349 54.871H34.2641L35.0951 52.3753L37.4474 53.5522L41.3576 49.642L40.1818 47.2907L42.6774 46.4586V44.7097H46.7419V57.0903C45.5621 57.511 44.7097 58.6289 44.7097 59.9516C44.7097 61.6321 46.0776 63 47.7581 63C49.4385 63 50.8064 61.6321 50.8064 59.9516C50.8064 58.6289 49.9541 57.511 48.7742 57.0903V44.7097H54.871V48.9186C53.122 49.3726 51.8226 50.9508 51.8226 52.8387C51.8226 55.0803 53.6455 56.9032 55.8871 56.9032C58.1287 56.9032 59.9516 55.0803 59.9516 52.8387C59.9516 50.9508 58.6522 49.3726 56.9032 48.9186V32.5161H63ZM26.4194 3.46913V6.09677H23.7917L26.4194 3.46913ZM22.3548 8.12903H28.4516V2.03226H40.6452V24.3871H22.3548V8.12903ZM2.03226 26.4194H12.1935V30.4839H2.03226V26.4194ZM9.14516 52.8387C9.14516 53.9595 8.23372 54.871 7.1129 54.871C5.99208 54.871 5.08065 53.9595 5.08065 52.8387C5.08065 51.7179 5.99208 50.8064 7.1129 50.8064C8.23372 50.8064 9.14516 51.7179 9.14516 52.8387ZM15.2419 60.9677C14.6813 60.9677 14.2258 60.5113 14.2258 59.9516C14.2258 59.3919 14.6813 58.9355 15.2419 58.9355C15.8026 58.9355 16.2581 59.3919 16.2581 59.9516C16.2581 60.5113 15.8026 60.9677 15.2419 60.9677ZM40.6452 44.993L38.3142 45.7705L38.1425 46.2185C38.0914 46.3485 38.0408 46.478 37.9848 46.6035L37.7878 47.0436L38.8863 49.2406L37.048 51.0788L34.851 49.9804L34.4114 50.1773C34.2864 50.2334 34.1594 50.284 34.0304 50.3331L33.5779 50.5038L32.7994 52.8387H30.1996L29.4211 50.5038L28.9686 50.3331C28.8396 50.284 28.7126 50.2334 28.5876 50.1773L28.148 49.9804L25.951 51.0788L24.1127 49.2406L25.2112 47.0436L25.0142 46.6035C24.9572 46.4765 24.9076 46.3485 24.8565 46.2185L24.6848 45.7705L22.3548 44.993V42.3931L24.6858 41.6156L24.8575 41.1676C24.9086 41.0376 24.9592 40.9081 25.0152 40.7821L25.2122 40.3425L24.1137 38.1455L25.952 36.3073L28.149 37.4058L28.5886 37.2088C28.7136 37.1527 28.8406 37.1021 28.9696 37.053L29.4221 36.8823L30.2006 34.5484H32.8004L33.5789 36.8833L34.0314 37.054C34.1604 37.1031 34.2874 37.1537 34.4124 37.2098L34.852 37.4067L37.049 36.3083L38.8873 38.1465L37.7888 40.3435L37.9858 40.7836C38.0428 40.9106 38.0924 41.0386 38.1435 41.1686L38.3152 41.6166L40.6452 42.3941V44.993ZM47.7581 60.9677C47.1974 60.9677 46.7419 60.5113 46.7419 59.9516C46.7419 59.3919 47.1974 58.9355 47.7581 58.9355C48.3187 58.9355 48.7742 59.3919 48.7742 59.9516C48.7742 60.5113 48.3187 60.9677 47.7581 60.9677ZM57.9194 52.8387C57.9194 53.9595 57.0079 54.871 55.8871 54.871C54.7663 54.871 53.8548 53.9595 53.8548 52.8387C53.8548 51.7179 54.7663 50.8064 55.8871 50.8064C57.0079 50.8064 57.9194 51.7179 57.9194 52.8387ZM50.8064 26.4194H60.9677V30.4839H50.8064V26.4194Z" fill="#363636"/>
                </g>
                <defs>
                <clipPath id="clip0">
                <rect width="63" height="63" fill="white"/>
                </clipPath>
                </defs>
              </svg>
            </span>
            <div className="descrip">
              <h4>Construye tu proyecto</h4>
              <p>Cuentas con la herramienta de desarrollo más sencilla del mercado y un equipo de profesionales  listo para ayudarte.</p>
            </div>
          </div>
        </Tab>
        <Tab>
          <div className="react-tabs__tab-contain">
            <span className="icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="67" height="67" viewBox="0 0 67 67" fill="none">
                <g clip-path="url(#clip0)">
                <path d="M66.5962 53.0486L62.6024 46.1309C62.2967 45.6018 61.854 45.1939 61.3316 44.9399V40.7156C61.3316 39.9933 60.7453 39.407 60.023 39.407H52.493C51.7702 39.407 51.1844 39.9933 51.1844 40.7156C51.1844 41.4384 51.7702 42.0242 52.493 42.0242H58.7144V44.9394C58.192 45.1939 57.7488 45.6013 57.4432 46.1304L53.4494 53.0486C52.9111 53.9809 52.9111 55.0948 53.4494 56.0271C53.9877 56.9595 54.9517 57.5162 56.0288 57.5162H58.7144V60.1328H40.0332C39.8651 56.6743 36.9984 53.9119 33.4985 53.9119C29.8911 53.9119 26.956 56.8471 26.956 60.4544C26.956 64.0622 29.8911 66.9973 33.4985 66.9973C36.2986 66.9973 38.693 65.2287 39.6248 62.75H60.0225C60.7453 62.75 61.3311 62.1642 61.3311 61.4414V57.5162H64.0168C65.0933 57.5162 66.0579 56.9595 66.5962 56.0271C67.1344 55.0948 67.1344 53.9809 66.5962 53.0486ZM33.4985 64.3802C31.3342 64.3802 29.5732 62.6192 29.5732 60.4544C29.5732 58.2901 31.3342 56.5291 33.4985 56.5291C35.6633 56.5291 37.4242 58.2901 37.4242 60.4544C37.4242 62.6192 35.6633 64.3802 33.4985 64.3802ZM64.3296 54.7185C64.2821 54.8008 64.1891 54.8995 64.0168 54.8995H56.0288C55.856 54.8995 55.7629 54.8008 55.7154 54.7185C55.6679 54.6362 55.629 54.5064 55.7154 54.3571L59.7097 47.4395C59.7956 47.2897 59.9274 47.2585 60.0225 47.2585C60.1176 47.2585 60.249 47.2902 60.3354 47.4395L64.3296 54.3571C64.416 54.5064 64.3772 54.6362 64.3296 54.7185Z" fill="#363636"/>
                <path d="M25.7394 42.0243L32.5732 48.8586C32.8288 49.1142 33.1637 49.2415 33.4985 49.2415C33.8338 49.2415 34.1686 49.1142 34.4242 48.8586L41.6409 41.6414C42.1521 41.1302 42.1521 40.3016 41.6409 39.7905L34.8071 32.9566V28.788H41.35C42.0723 28.788 42.6586 28.2022 42.6586 27.4795V18.0581C42.6586 17.3353 42.0723 16.7495 41.35 16.7495H34.8071V12.0386H41.35C42.0723 12.0386 42.6586 11.4528 42.6586 10.73V1.30859C42.6586 0.5858 42.0723 0 41.35 0H25.6474C24.9246 0 24.3388 0.5858 24.3388 1.30859V10.73C24.3388 11.4528 24.9246 12.0386 25.6474 12.0386H32.1904V16.7495H25.6474C24.9246 16.7495 24.3388 17.3353 24.3388 18.0581V21.4599H6.54297C5.82018 21.4599 5.23438 22.0457 5.23438 22.7685V34.1732H1.30859C0.5858 34.1732 0 34.759 0 35.4818V45.95C0 46.6728 0.5858 47.2586 1.30859 47.2586H11.7768C12.4996 47.2586 13.0854 46.6728 13.0854 45.95V42.0243H25.7394ZM26.956 2.61719H40.0414V9.42136H26.956V2.61719ZM33.4985 46.0824L28.1322 40.7162L33.4985 35.3494L38.8652 40.7157L33.4985 46.0824ZM26.956 19.3667H40.0414V26.1709H26.956V19.3667ZM7.85105 24.0771H24.3388V27.4795C24.3388 28.2022 24.9246 28.788 25.6474 28.788H32.1904V32.9566L25.7394 39.4071H13.0854V35.4818C13.0854 34.759 12.4996 34.1732 11.7768 34.1732H7.85105V24.0771ZM10.4682 44.6415H2.61719V36.7904H10.4682V44.6415Z" fill="#363636"/>
                <path d="M46.6039 42.0237C46.9494 42.0237 47.2853 41.8852 47.5301 41.6418C47.7734 41.397 47.9135 41.0606 47.9135 40.7166C47.9135 40.3711 47.7734 40.0337 47.5301 39.7899C47.2853 39.5466 46.9494 39.4065 46.6039 39.4065C46.2594 39.4065 45.922 39.5466 45.6787 39.7899C45.4353 40.0337 45.2953 40.3711 45.2953 40.7166C45.2953 41.0606 45.4353 41.397 45.6787 41.6418C45.922 41.8852 46.2599 42.0237 46.6039 42.0237Z" fill="#363636"/>
                </g>
                <defs>
                <clipPath id="clip0">
                <rect width="67" height="67" fill="white"/>
                </clipPath>
                </defs>
              </svg>
            </span>
            <div className="descrip">
              <h4>Crea funciones</h4>
              <p>Desarrolla soluciones innovadoras, comparte tus funciones y monetiza tu código.</p>
            </div>
          </div>
        </Tab>
      </TabList>

      <TabPanel>
        <div className="list-content">
            <div className="list-content__item">
              <span>1</span><p>Copia la URL con la ubicación de la función.</p>
              <input disabled value={this.state.value} onChange={({target: {value}}) => this.setState({value, copied: false})} />
                  <CopyToClipboard text={this.state.value} onCopy={() => this.setState({copied: true})}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                    <g clip-path="url(#clip0)">
                    <path d="M4.53063 0.712036H12.895C13.6617 0.712036 14.2891 1.33936 14.2891 2.1061V11.8645H12.895V2.1061H4.53063V0.712036ZM2.43953 3.50016H10.1069C10.8736 3.50016 11.5009 4.12749 11.5009 4.89422V14.6527C11.5009 15.4194 10.8736 16.0467 10.1069 16.0467H2.43953C1.6728 16.0467 1.04547 15.4194 1.04547 14.6527V4.89422C1.04547 4.12749 1.6728 3.50016 2.43953 3.50016ZM2.43953 14.6527H10.1069V4.89422H2.43953V14.6527Z" fill="white"/>
                    </g>
                    <defs>
                    <clipPath id="clip0">
                    <rect width="15.3347" height="15.3347" fill="white" transform="matrix(-1 0 0 1 15.3347 0.712036)"/>
                    </clipPath>
                    </defs>
                  </svg>
                  </CopyToClipboard>
            </div>
            <div className="list-content__item">
              <span>2</span>
              <p>Establece los parametros necesarios.</p>
            </div>
            <div className="list-content__item">
              <span>3</span>
              <p>Ejecuta la función y consume cuantas veces la necesites.</p>
            </div>
            <div className="list-content__item justify-content-between">
              <button>Ver Documentación</button>
              <div className="conector"></div>
              <figure>
                <img src={IconVideoPlayer} alt="Logo" />
              </figure>
            </div>
        </div>
      </TabPanel>
      <TabPanel>
        <div className="list-content">
          <div className="list-content__item">
            <span>1</span>
            <p>Indicanos que funcion necesitas desarrollar para tu empresa</p>
          </div>
          <div className="list-content__item">
            <span>2</span>
            <p>El equipo de Poetri le contactara para asesorarlo e indicarle como construir un proyecto con nuestra tecnologia.</p>
          </div>
          <div className="list-content__item">
            <span>3</span>
            <p>Ejecuta la función y consume cuantas veces la necesites.</p>
          </div>
        </div>
      </TabPanel>
      <TabPanel>
      <div className="list-content">
          <div className="list-content__item">
            <span>1</span><p>Descarga e instala el CLI para comenzar.</p>
            <input disabled value={this.stateTwo.value} onChange={({target: {value}}) => this.setState({value, copied: false})} />
                <CopyToClipboard text={this.stateTwo.value} onCopy={() => this.setState({copied: true})}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                  <g clip-path="url(#clip0)">
                  <path d="M4.53063 0.712036H12.895C13.6617 0.712036 14.2891 1.33936 14.2891 2.1061V11.8645H12.895V2.1061H4.53063V0.712036ZM2.43953 3.50016H10.1069C10.8736 3.50016 11.5009 4.12749 11.5009 4.89422V14.6527C11.5009 15.4194 10.8736 16.0467 10.1069 16.0467H2.43953C1.6728 16.0467 1.04547 15.4194 1.04547 14.6527V4.89422C1.04547 4.12749 1.6728 3.50016 2.43953 3.50016ZM2.43953 14.6527H10.1069V4.89422H2.43953V14.6527Z" fill="white"/>
                  </g>
                  <defs>
                  <clipPath id="clip0">
                  <rect width="15.3347" height="15.3347" fill="white" transform="matrix(-1 0 0 1 15.3347 0.712036)"/>
                  </clipPath>
                  </defs>
                </svg>
                </CopyToClipboard>
          </div>
          <div className="list-content__item">
            <span>2</span>
            <p>Desde la consola de comandos escribe:</p>
            <input disabled value={this.stateThree.value} onChange={({target: {value}}) => this.setState({value, copied: false})} />
                <CopyToClipboard text={this.stateThree.value} onCopy={() => this.setState({copied: true})}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                  <g clip-path="url(#clip0)">
                  <path d="M4.53063 0.712036H12.895C13.6617 0.712036 14.2891 1.33936 14.2891 2.1061V11.8645H12.895V2.1061H4.53063V0.712036ZM2.43953 3.50016H10.1069C10.8736 3.50016 11.5009 4.12749 11.5009 4.89422V14.6527C11.5009 15.4194 10.8736 16.0467 10.1069 16.0467H2.43953C1.6728 16.0467 1.04547 15.4194 1.04547 14.6527V4.89422C1.04547 4.12749 1.6728 3.50016 2.43953 3.50016ZM2.43953 14.6527H10.1069V4.89422H2.43953V14.6527Z" fill="white"/>
                  </g>
                  <defs>
                  <clipPath id="clip0">
                  <rect width="15.3347" height="15.3347" fill="white" transform="matrix(-1 0 0 1 15.3347 0.712036)"/>
                  </clipPath>
                  </defs>
                </svg>
                </CopyToClipboard>
          </div>
          <div className="list-content__item">
            <span>3</span>
            <p>Empieza a escribir tu código hecho poesia.</p>
          </div>
          <div className="list-content__item justify-content-between">
            <button>Ver Documentación</button>
            <div className="conector"></div>
            <figure>
              <img src={IconVideoPlayer} alt="Logo" />
            </figure>
          </div>
      </div>
      </TabPanel>
    </Tabs>
  </div>
    )
  }
};
export default HowFunction;