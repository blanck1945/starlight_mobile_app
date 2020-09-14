import { SchoolData } from "../store/interface/interface";

//Seijou school data
const seijou_school = require("../assets/school-header/ttl-seisho.png");
const karen_profile = require("../assets/profile_img/img-seisho-karen.png");
const hikari_profile = require("../assets/profile_img/img-seisho-hikari.png");
const mahiru_profile = require("../assets/profile_img/img-seisho-mahiru.png");
const claudine_profile = require("../assets/profile_img/img-seisho-claudine.png");
const tendou_profile = require("../assets/profile_img/img-seisho-maya.png");
const hinata_profile = require("../assets/profile_img/img-seisho-junna.png");
const nana_profile = require("../assets/profile_img/img-seisho-nana.png");
const futaba_profile = require("../assets/profile_img/img-seisho-futaba.png");
const kauruko_profile = require("../assets/profile_img/img-seisho-kaoruko.png");

//Rinmeikan school data
const rinmeikan_school = require("../assets/school-header/ttl-rinmeikan.png");
const tamao_profile = require("../assets/profile_img/rinmaken/img-rinmeikan-tamao.png");
const ichie_profile = require("../assets/profile_img/rinmaken/img-rinmeikan-ichie.png");
const fumi_profile = require("../assets/profile_img/rinmaken/img-rinmeikan-fumi.png");
const rui_profile = require("../assets/profile_img/rinmaken/img-rinmeikan-rui.png");
const yuyuko_profile = require("../assets/profile_img/rinmaken/img-rinmeikan-yuyuko.png");

export const SeijouSchool: SchoolData = {
  school_img: seijou_school.default,
  school_description: [
    "An academy made with the purpose of fostering those with talent for performance.",
    "Has a proud history of 100 years. The school is divided into the Actor Training Department,",
    " in which students learn to be stage actresses, and the Stage Production Department, in which students learn how to work behind the scenes.",
  ],
  photo_arr: {
    student_1: karen_profile,
    student_2: hikari_profile,
    student_3: mahiru_profile,
    student_4: claudine_profile,
    student_5: tendou_profile,
    student_6: hinata_profile,
    student_7: nana_profile,
    student_8: futaba_profile,
    student_9: kauruko_profile,
  },
};

export const RinmeikanSchool: SchoolData = {
  school_img: rinmeikan_school.default,
  school_description: [
    "A school with the goal of instilling its students with 'Yamato Nadeshiko' ideals. Tea ceremony",
    "flower arrangement, calligraphy, and Japanese dance classes have made the school known for its emphasis",
    "on traditional Japanese culture. With decreasing student numbers, the schools courses are undergoing reorganization.",
  ],
  photo_arr: {
    student_1: tamao_profile,
    student_2: ichie_profile,
    student_3: fumi_profile,
    student_4: rui_profile,
    student_5: yuyuko_profile,
  },
};
