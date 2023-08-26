<script setup>
import { ref } from "vue";
import ServicesSection from "../components/parts/ServicesSection.vue";
import MainLayout from "../layouts/MainLayout.vue";
import CardSection from "../components/parts/CardSection.vue";
import CardSection2 from "../components/parts/CardSection2.vue";
import CardSection3 from "../components/parts/CardSection3.vue";
import TriangleSection from "../components/parts/TriangleSection.vue";
import phone from "vue-material-design-icons/Phone.vue";
import Email from "vue-material-design-icons/Email.vue";
import Earth from "vue-material-design-icons/Earth.vue";
import location from "vue-material-design-icons/LocationEnter.vue";
import instigram from "vue-material-design-icons/Instagram.vue";
import Facebook from "vue-material-design-icons/Facebook.vue";
import Youtube from "vue-material-design-icons/Youtube.vue";
import ArrowRight from "vue-material-design-icons/ArrowRight.vue";
import Swal from "sweetalert2";

let hanyshaker = ref(true);
let mohamed = ref(true);
function toggleValue() {
  hanyshaker.value = !hanyshaker.value; // Toggle the value between true and false
  mohamed.value = !mohamed.value; // Toggle the value between true and false
}

setInterval(toggleValue, 7000); // Toggle the value every 5 seconds

import emailjs from "emailjs-com";

const username = ref("");
const email = ref("");
const subject = ref("");
const message = ref("");

const sendEmail = async () => {
  try {
    const templateParams = {
      name: username.value,
      email: email.value,
      subject: subject.value,
      message: message.value,
    };

    await emailjs.send(
      "service_96tvasx",
      "template_n5pzpvn",
      templateParams,
      "M6ztetsg4ziOSTbLX"
    );

    Swal.fire({
      title: "Email sent successfully",
      text: `Thank You ${username.value}`,
      icon: "success",
      confirmButtonText: "Cool",
    });
    username.value = "";
    email.value = "";
    subject.value = "";
    message.value = "";
  } catch (error) {
    console.error("An error occurred:", error);
  }
};
</script>

<template>
  <MainLayout>
    <div class="bg-gray-400 lg:h-[500px] md:h-[450px] overflow-hidden relative">
      <img src="/images/websitescreensize.png" alt="" />
      <div
        class="absolute md:top-[50%] top-[60%] left-[50%] -translate-x-[50%] -translate-y-[50%] text-center"
      >
        <h1
          class="xl:text-8xl lg:text-6xl md:text-5xl text-2xl text-white font-serif mb-2"
        >
          WE ARE
          <span class="text-[#ffc600]">V9</span>
        </h1>
        <h2
          class="xl:text-5xl lg:text-4xl md:text-3xl text-lg text-white font-serif"
        >
          MEDIA <span class="font-bold">PRODUCTION</span>
        </h2>
      </div>
    </div>
    <div class="-mt-1 md:-mt-50">
      <img src="/images/sandsection.png" alt="" />
    </div>
    <div class="section-3 -mt-1 relative z-20 pt-10">
      <!-- <img src="/images/section3.png" class="w-full h-full" alt="" /> -->
      <!-- absolute w-full top-40 left-[50%] -translate-x-[50%] -->
      <div class="text-center">
        <h3
          class="xl:text-8xl lg:text-6xl md:text-5xl text-2xl text-white font-serif mb-10"
        >
          SERVICES
        </h3>
        <div>
          <ServicesSection />
        </div>
      </div>
    </div>
    <div class="section-4 -mt-1 relative py-20">
      <!-- <img src="/images/Layer16.png" class="w-full h-full" alt="" /> -->
      <div class="tour relative"></div>
      <CardSection />
      <CardSection2 />
    </div>
    <div class="section-5 h-[1000px] -mt-1 relative py-20">
      <CardSection3 />
      <div class="-mt-36">
        <img
          src="/images/servicesword.png"
          class="w-[80%] mx-auto mb-10"
          alt=""
        />
        <div class="text-center text-white pb-20">
          <h4 class="text-3xl md:text-5xl lg:text-6xl font-light">
            INTERESTED <b class="font-extrabold">IN</b><br />
            <b class="font-extrabold">WORKING</b> WHITH US?
          </h4>
        </div>
      </div>
      <img src="/images/light.png" alt="" />
    </div>
    <div class="section-6 h-[1000px] -mt-1 relative py-20">
      <TriangleSection />
    </div>
    <div class="section-before relative">
      <div class="section-7 -mt-1 relative py-20">
        <img src="/images/light.png" class="mb-14" alt="" />
        <div>
          <img src="/images/client.png" class="w-[80%] mx-auto mb-10" alt="" />
          <div class="text-center text-white pb-20">
            <h4 class="text-3xl md:text-5xl lg:text-6xl font-light">
              <b class="font-extrabold"> We Have</b> Worked<br />
              With Creat <b class="font-extrabold">People</b>
            </h4>
          </div>
        </div>
      </div>
      <div
        class="section-8 -mt-1 relative py-20 xl:h-[1200px] md:h-[800px] h-[250px]"
        :class="mohamed ? 'mohamed ' : 'hanyshaker '"
      >
        <p
          class="text-3xl md:text-5xl lg:text-6xl font-light absolute bottom-[22px] text-white"
          :class="
            mohamed
              ? ' -scale-x-[1] left-[30px] md:left-[47]'
              : 'right-[30px] md:right-[47px] '
          "
        >
          {{ mohamed ? "MOHAMED ASSAF" : "HANI SHAKER" }}
        </p>
      </div>
    </div>
    <div
      class="section-9 -mt-1 relative py-20 xl:h-[1300px] lg:h-[850px] md:h-[650px] min-h-[400px]"
    >
      <div class="text-center text-white pb-20 xl:mt-52 lg:mt-32 md:mt-20">
        <h4 class="text-3xl md:text-5xl lg:text-6xl font-light">
          <b class="font-extrabold">WE ARE</b> Here<br />
          TO MAKE YOU <b class="font-extrabold">HAPPY!</b>
        </h4>
      </div>
    </div>
    <div class="section-10 -mt-1 relative py-32">
      <div class="container mx-auto px-3 grid grid-col-1 md:grid-cols-2 md:w-[55%]">
        <div class="flex items-center gap-3 m-3" v-motion-pop-visible>
          <phone :size="34" />
          <p class="md:text-xl text-sm">+971 52 512 7772</p>
        </div>
        <div class="flex items-center gap-3 m-3" v-motion-pop-visible>
          <Earth :size="34" />
          <p class="md:text-xl text-sm">www.v9.ae</p>
        </div>
        <a href="mailto:Version9media@gmail.com">
          <div class="flex items-center gap-3 m-3" v-motion-pop-visible>
            <Email :size="34" />
            <p class="md:text-xl text-sm">Version9media@gmail.com</p>
          </div></a
        >
        <div class="flex items-center gap-3 m-3" v-motion-pop-visible>
          <location :size="34" />
          <p class="md:text-xl text-sm">
            UAE,Dubai Business <br />
            Bay-Metropolis Tower
          </p>
        </div>
      </div>
    </div>
    <div class="section-11 -mt-1 relative pb-32 pt-10">
      <div class="xl:mx-40 lg:mx-20 md:mx-10 px-4 text-white">
        <h4 class="md:text-xl text-lg">
          Want something or just want to start with <br />
          us write to us now
        </h4>
        <form @submit.prevent="sendEmail" class="mb-10">
          <input
            v-model="username"
            type="text"
            placeholder="Name"
            v-motion-pop-visible
          />
          <input
            v-model="email"
            type="email"
            placeholder="E-mail"
            v-motion-pop-visible
          />
          <input
            v-model="subject"
            type="text"
            placeholder="Subject"
            v-motion-pop-visible
          />
          <textarea
            v-model="message"
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Message"
            v-motion-pop-visible
          ></textarea>
          <button type="submit" class="submit flex items-center gap-2">
            <button>SEND MESSAGE</button>
            <ArrowRight />
          </button>
        </form>
        <div class="flex items-center justify-center gap-5">
          <a href="https://www.instagram.com/version.9/"
            ><instigram :size="38"
          /></a>
          <a href="https://www.facebook.com/Version9media"
            ><Facebook :size="38"
          /></a>
          <a href="https://www.youtube.com/channel/UCU3XAMmvUnk4dehJjW1FCCw"
            ><Youtube :size="38"
          /></a>
        </div>
        <div
          class="text-center flex flex-col justify-center items-center mt-10"
        >
          <img src="/images/logo.png" alt="" />
          <p class="space-x-3 text-xl">
            <b class="font-extrabold">VERSION 9</b><br />MEDIA PRODUCTION
          </p>
        </div>
      </div>
    </div>
  </MainLayout>
</template>
<style scoped>
.section-3 {
  background-image: url("/images/section3.png");
  background-size: cover;
  background-position: top;
}
.section-4 {
  /*background-image: url("/images/Layer16.png");
  background-size: cover;
  background-position: top;*/
  background-color: #cdac91;
}
.section-5 {
  /*background-image: url("/images/section5.png");
  background-size: cover;
  background-position: top;*/
  background: rgb(2, 0, 36);
  background: radial-gradient(
    circle,
    rgba(2, 0, 36, 1) 0%,
    rgb(1, 96, 116) 0%,
    rgba(45, 46, 50, 1) 69%
  );
}
.section-6 {
  /*background-image: url("/images/section6.png");
  background-size: cover;
  background-position: top;*/
  background-color: #bc9d82;
}
.section-7 {
  /*background-image: url("/images/actors.png");
  background-size: cover;
  background-position: top;*/
  background-color: #3f4246;
}
.hanyshaker.section-8 {
  background-image: url("/images/hanyshaker.png");
  background-size: cover;
  background-position: top;
}
.mohamed.section-8 {
  background-image: url("/images/mohamed.png");
  background-size: cover;
  background-position: top;
  transform: scaleX(-1);
}
.section-9 {
  background-image: url("/images/helpsection.png");
  background-size: cover;
  background-position: top;
}
.section-10 {
  background-color: #ccbcac;
}
.section-11 {
  background: rgb(2, 0, 36);
  background: radial-gradient(
    circle,
    rgba(2, 0, 36, 1) 0%,
    rgb(1, 96, 116) 0%,
    rgba(45, 46, 50, 1) 69%
  );
}
.fadeIn {
  animation: fadeIn 0.5s ease-in-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.section-before::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  left: -35px;
  background-image: url("../../public/images/Layerwithoutbackground1.png");
  background-size: cover;
  background-position: top;
  z-index: 2;
}
h1 {
  position: relative;
  animation: textUp 1s ease-in-out;
  text-shadow: 10px 10px rgba(0, 0, 0, 0.5);
}
h3 {
  text-shadow: 5px 5px rgba(0, 0, 0, 0.5);
}
h2 {
  overflow: hidden; /* Ensures the content is not revealed until the animation */
  border-right: 0.15em solid orange; /* The typwriter cursor */
  white-space: nowrap; /* Keeps the content on a single line */
  margin: 0 auto; /* Gives that scrolling effect as the typing happens */
  letter-spacing: 0.15em; /* Adjust as needed */
  animation: typing 3.5s steps(40, end), blink-caret 0.75s step-end infinite;
}

/* The typing effect */
@keyframes typing {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}

/* The typewriter cursor effect */
@keyframes blink-caret {
  from,
  to {
    border-color: transparent;
  }
  50% {
    border-color: orange;
  }
}

h1::before {
  content: "";
  position: absolute;
  width: 15px;
  height: 15px;
  background-color: white;
  top: 20px;
  left: -25px;
  border-radius: 50%;
  box-shadow: 0 0 10px white;
  animation: opacity 3s ease-in-out infinite;
}
h1::after {
  content: "";
  position: absolute;
  width: 18px;
  height: 18px;
  background-color: white;
  bottom: -20px;
  right: -40px;
  border-radius: 50%;
  box-shadow: 0 0 10px white;
  animation: opacity 3s ease-in-out infinite;
}
h2::before {
  content: "";
  position: absolute;
  width: 15px;
  height: 15px;
  background-color: white;
  bottom: -30px;
  left: 20%;
  border-radius: 50%;
  box-shadow: 0 0 14px white;
  animation: opacity 3s ease-in-out infinite;
}
h2::after {
  content: "";
  position: absolute;
  width: 18px;
  height: 18px;
  background-color: #ffc600;
  bottom: -85px;
  right: -105px;
  border-radius: 50%;
  box-shadow: 0 0 20px white;
  animation: opacity 3s ease-in-out infinite;
}

@keyframes opacity {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
@keyframes textUp {
  from {
    opacity: 0.1;
    transform: translateY(-60px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.tour::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 400px;
  top: -236px;
  left: 0px;
  z-index: 20;
  background-image: url(images/sand.png);
}
input,
textarea {
  background-color: #2a2b2f;
  border: 2px solid white;
  display: block;
  width: 100%;
  margin: 15px 0px;
  padding: 25px;
  border-radius: 56px;
  color: white;
  transition: 0.8s;
}
.submit {
  background-color: #2a2b2f;
  border: 2px solid white;
  width: fit-content;
  margin: 15px 0px;
  padding: 25px;
  border-radius: 56px;
  color: white;
  cursor: pointer;
  box-shadow: 0 0 10px #ddd;
  transition: 0.5s;
}
.submit:hover {
  color: #ffc600;
  box-shadow: 0 0 10px #ffc600;
}
input:focus,
textarea:focus {
  outline: none;
  border-color: #ffc600;
}
</style>
