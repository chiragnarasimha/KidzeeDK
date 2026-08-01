import "google.maps"
let map: google.maps.Place
// map.
export const REVIEWS_DATA = {
  name: "places/ChIJr86Q5ttqrjsRj1MmkJcRPlc",
  id: "ChIJr86Q5ttqrjsRj1MmkJcRPlc",
  types: [
    "preschool",
    "child_care_agency",
    "school",
    "educational_institution",
    "point_of_interest",
    "service",
    "establishment",
  ],
  nationalPhoneNumber: "097403 35600",
  internationalPhoneNumber: "+91 97403 35600",
  formattedAddress:
    "112, 4th Cross Central Excise Layout, Phase 2, Tejaswini Nagar, Phase 2, Begur Hobli, Doddakammanahalli, Bengaluru, Karnataka 560083, India",
  addressComponents: [
    {
      longText:
        "112, 4th Cross Central Excise Layout, Phase 2, Tejaswini Nagar",
      languageCode: "en",
    },
    {
      longText: "Begur Hobli",
      shortText: "Begur Hobli",
      types: ["sublocality_level_1", "sublocality", "political"],
      languageCode: "en",
    },
    {
      longText: "Phase 2",
      shortText: "Phase 2",
      types: ["sublocality_level_2", "sublocality", "political"],
      languageCode: "en",
    },
    {
      longText: "Doddakammanahalli",
      shortText: "Doddakammanahalli",
      types: ["locality", "political"],
      languageCode: "en",
    },
    {
      longText: "Bengaluru",
      shortText: "Bengaluru",
      types: ["locality", "political"],
      languageCode: "en",
    },
    {
      longText: "Bengaluru Urban",
      shortText: "Bengaluru Urban",
      types: ["administrative_area_level_3", "political"],
      languageCode: "en",
    },
    {
      longText: "Bangalore Division",
      shortText: "Bangalore Division",
      types: ["administrative_area_level_2", "political"],
      languageCode: "en",
    },
    {
      longText: "Karnataka",
      shortText: "KA",
      types: ["administrative_area_level_1", "political"],
      languageCode: "en",
    },
    {
      longText: "India",
      shortText: "IN",
      types: ["country", "political"],
      languageCode: "en",
    },
    {
      longText: "560083",
      shortText: "560083",
      types: ["postal_code"],
      languageCode: "en-US",
    },
  ],
  plusCode: {
    globalCode: "7J4VVJ62+6R",
    compoundCode: "VJ62+6R Doddakammanahalli, Karnataka, India",
  },
  location: {
    latitude: 12.860505999999999,
    longitude: 77.602043,
  },
  viewport: {
    low: {
      latitude: 12.859164269708497,
      longitude: 77.6006471697085,
    },
    high: {
      latitude: 12.8618622302915,
      longitude: 77.6033451302915,
    },
  },
  rating: 4.9,
  googleMapsUri:
    "https://maps.google.com/?cid=6286481472511955855&g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAIYBCAA",
  regularOpeningHours: {
    openNow: true,
    periods: [
      {
        open: {
          day: 1,
          hour: 8,
          minute: 30,
        },
        close: {
          day: 1,
          hour: 15,
          minute: 30,
        },
      },
      {
        open: {
          day: 2,
          hour: 8,
          minute: 30,
        },
        close: {
          day: 2,
          hour: 15,
          minute: 30,
        },
      },
      {
        open: {
          day: 3,
          hour: 8,
          minute: 30,
        },
        close: {
          day: 3,
          hour: 15,
          minute: 30,
        },
      },
      {
        open: {
          day: 4,
          hour: 8,
          minute: 30,
        },
        close: {
          day: 4,
          hour: 15,
          minute: 30,
        },
      },
      {
        open: {
          day: 5,
          hour: 8,
          minute: 30,
        },
        close: {
          day: 5,
          hour: 15,
          minute: 30,
        },
      },
      {
        open: {
          day: 6,
          hour: 10,
          minute: 0,
        },
        close: {
          day: 6,
          hour: 15,
          minute: 30,
        },
      },
    ],
    weekdayDescriptions: [
      "Monday: 8:30 AM – 3:30 PM",
      "Tuesday: 8:30 AM – 3:30 PM",
      "Wednesday: 8:30 AM – 3:30 PM",
      "Thursday: 8:30 AM – 3:30 PM",
      "Friday: 8:30 AM – 3:30 PM",
      "Saturday: 10:00 AM – 3:30 PM",
      "Sunday: Closed",
    ],
    nextCloseTime: "2026-06-15T10:00:00Z",
  },
  utcOffsetMinutes: 330,
  adrFormatAddress:
    '112, 4th Cross Central Excise Layout, Phase 2, Tejaswini Nagar, \u003cspan class="extended-address"\u003ePhase 2, Begur Hobli\u003c/span\u003e, \u003cspan class="locality"\u003eDoddakammanahalli, Bengaluru\u003c/span\u003e, \u003cspan class="region"\u003eKarnataka\u003c/span\u003e \u003cspan class="postal-code"\u003e560083\u003c/span\u003e, \u003cspan class="country-name"\u003eIndia\u003c/span\u003e',
  businessStatus: "OPERATIONAL",
  userRatingCount: 211,
  iconMaskBaseUri:
    "https://maps.gstatic.com/mapfiles/place_api/icons/v2/school_pinlet",
  iconBackgroundColor: "#7B9EB0",
  displayName: {
    text: "Kidzee Doddakammanahalli",
    languageCode: "en",
  },
  primaryTypeDisplayName: {
    text: "Preschool",
    languageCode: "en-US",
  },
  currentOpeningHours: {
    openNow: true,
    periods: [
      {
        open: {
          day: 1,
          hour: 8,
          minute: 30,
          date: {
            year: 2026,
            month: 6,
            day: 15,
          },
        },
        close: {
          day: 1,
          hour: 15,
          minute: 30,
          date: {
            year: 2026,
            month: 6,
            day: 15,
          },
        },
      },
      {
        open: {
          day: 2,
          hour: 8,
          minute: 30,
          date: {
            year: 2026,
            month: 6,
            day: 16,
          },
        },
        close: {
          day: 2,
          hour: 15,
          minute: 30,
          date: {
            year: 2026,
            month: 6,
            day: 16,
          },
        },
      },
      {
        open: {
          day: 3,
          hour: 8,
          minute: 30,
          date: {
            year: 2026,
            month: 6,
            day: 17,
          },
        },
        close: {
          day: 3,
          hour: 15,
          minute: 30,
          date: {
            year: 2026,
            month: 6,
            day: 17,
          },
        },
      },
      {
        open: {
          day: 4,
          hour: 8,
          minute: 30,
          date: {
            year: 2026,
            month: 6,
            day: 18,
          },
        },
        close: {
          day: 4,
          hour: 15,
          minute: 30,
          date: {
            year: 2026,
            month: 6,
            day: 18,
          },
        },
      },
      {
        open: {
          day: 5,
          hour: 8,
          minute: 30,
          date: {
            year: 2026,
            month: 6,
            day: 19,
          },
        },
        close: {
          day: 5,
          hour: 15,
          minute: 30,
          date: {
            year: 2026,
            month: 6,
            day: 19,
          },
        },
      },
      {
        open: {
          day: 6,
          hour: 10,
          minute: 0,
          date: {
            year: 2026,
            month: 6,
            day: 20,
          },
        },
        close: {
          day: 6,
          hour: 15,
          minute: 30,
          date: {
            year: 2026,
            month: 6,
            day: 20,
          },
        },
      },
    ],
    weekdayDescriptions: [
      "Monday: 8:30 AM – 3:30 PM",
      "Tuesday: 8:30 AM – 3:30 PM",
      "Wednesday: 8:30 AM – 3:30 PM",
      "Thursday: 8:30 AM – 3:30 PM",
      "Friday: 8:30 AM – 3:30 PM",
      "Saturday: 10:00 AM – 3:30 PM",
      "Sunday: Closed",
    ],
    nextCloseTime: "2026-06-15T10:00:00Z",
  },
  primaryType: "preschool",
  shortFormattedAddress:
    "112, 4th Cross Central Excise Layout, Phase 2, Tejaswini Nagar, Begur Hobli, Doddakammanahalli, Bengaluru",
  reviews: [
    {
      name: "places/ChIJr86Q5ttqrjsRj1MmkJcRPlc/reviews/Ci9DQUlRQUNvZENodHljRjlvT2pCRmVpMTVhME16VEZwb2JHRTNWSE5ZUjBReWFrRRAB",
      relativePublishTimeDescription: "2 months ago",
      rating: 5,
      text: {
        text: "Thank you KIDZEE!!!\nThank you Nishi ma'am. My child's performance has drastically changed. We have seen a lot of improvement  in his daily activities - academic, physical. Overall areas have improved. His class teacher, Nishi ma'am has shown great interest in teaching and training Yusuf.",
        languageCode: "en",
      },
      originalText: {
        text: "Thank you KIDZEE!!!\nThank you Nishi ma'am. My child's performance has drastically changed. We have seen a lot of improvement  in his daily activities - academic, physical. Overall areas have improved. His class teacher, Nishi ma'am has shown great interest in teaching and training Yusuf.",
        languageCode: "en",
      },
      authorAttribution: {
        displayName: "Siddiqui Naureen",
        uri: "https://www.google.com/maps/contrib/114827160852272837072/reviews",
        photoUri:
          "https://lh3.googleusercontent.com/a/ACg8ocIF_LIh5vi_RtcdM4hVo1zUtDGm4kyHQWteVs1Ik1tD67SxFIY=s128-c0x00000000-cc-rp-mo",
      },
      publishTime: "2026-03-26T06:07:20.210723133Z",
      flagContentUri:
        "https://www.google.com/local/content/rap/report?postId=Ci9DQUlRQUNvZENodHljRjlvT2pCRmVpMTVhME16VEZwb2JHRTNWSE5ZUjBReWFrRRAB&d=17924085&t=1",
      googleMapsUri:
        "https://www.google.com/maps/reviews/data=!4m6!14m5!1m4!2m3!1sCi9DQUlRQUNvZENodHljRjlvT2pCRmVpMTVhME16VEZwb2JHRTNWSE5ZUjBReWFrRRAB!2m1!1s0x3bae6adbe690ceaf:0x573e11979026538f",
    },
    {
      name: "places/ChIJr86Q5ttqrjsRj1MmkJcRPlc/reviews/Ci9DQUlRQUNvZENodHljRjlvT2xGb2VWRjBOVXBPVkUxaE5FZERNVkoyWTE5WlJYYxAB",
      relativePublishTimeDescription: "2 months ago",
      rating: 5,
      text: {
        text: "I am very happy that I chose Kidzee school for my kid. Learning wise she has upskilled her self very much.Academic curriculum ,sports curriculum really it's very good organization.\nTeacher's of Kidzee school is very supportive and helpful children to grow .",
        languageCode: "en",
      },
      originalText: {
        text: "I am very happy that I chose Kidzee school for my kid. Learning wise she has upskilled her self very much.Academic curriculum ,sports curriculum really it's very good organization.\nTeacher's of Kidzee school is very supportive and helpful children to grow .",
        languageCode: "en",
      },
      authorAttribution: {
        displayName: "CHANDAN PATTANAYAK",
        uri: "https://www.google.com/maps/contrib/111360682859438895596/reviews",
        photoUri:
          "https://lh3.googleusercontent.com/a-/ALV-UjXVNGtfCnJB_Gg42YQFEdxrVMAIJpp-x7ECo_RZj4SLwtOPqqo=s128-c0x00000000-cc-rp-mo",
      },
      publishTime: "2026-03-28T03:28:18.160947311Z",
      flagContentUri:
        "https://www.google.com/local/content/rap/report?postId=Ci9DQUlRQUNvZENodHljRjlvT2xGb2VWRjBOVXBPVkUxaE5FZERNVkoyWTE5WlJYYxAB&d=17924085&t=1",
      googleMapsUri:
        "https://www.google.com/maps/reviews/data=!4m6!14m5!1m4!2m3!1sCi9DQUlRQUNvZENodHljRjlvT2xGb2VWRjBOVXBPVkUxaE5FZERNVkoyWTE5WlJYYxAB!2m1!1s0x3bae6adbe690ceaf:0x573e11979026538f",
    },
    {
      name: "places/ChIJr86Q5ttqrjsRj1MmkJcRPlc/reviews/Ci9DQUlRQUNvZENodHljRjlvT25jMWFtbHJNa1p1V1dkMFdWUTRYM2RaVVRSU01YYxAB",
      relativePublishTimeDescription: "2 months ago",
      rating: 5,
      text: {
        text: "Am very happy with 2 years of experience with Kidzee. I am thankful to the teachers for their endless effects towords my kid ayera . When she joined she was a very quite and was not able to mingle with anybody. Am thankful that now she is very confident towords her speach and her behaviour.",
        languageCode: "en",
      },
      originalText: {
        text: "Am very happy with 2 years of experience with Kidzee. I am thankful to the teachers for their endless effects towords my kid ayera . When she joined she was a very quite and was not able to mingle with anybody. Am thankful that now she is very confident towords her speach and her behaviour.",
        languageCode: "en",
      },
      authorAttribution: {
        displayName: "misbah farheen",
        uri: "https://www.google.com/maps/contrib/102738838987704581517/reviews",
        photoUri:
          "https://lh3.googleusercontent.com/a/ACg8ocI_bYQgrewTfaEAjpRC0UCtawmriNhWyJZRcxHRWUDG2Y7NgA=s128-c0x00000000-cc-rp-mo",
      },
      publishTime: "2026-03-27T07:33:33.607487524Z",
      flagContentUri:
        "https://www.google.com/local/content/rap/report?postId=Ci9DQUlRQUNvZENodHljRjlvT25jMWFtbHJNa1p1V1dkMFdWUTRYM2RaVVRSU01YYxAB&d=17924085&t=1",
      googleMapsUri:
        "https://www.google.com/maps/reviews/data=!4m6!14m5!1m4!2m3!1sCi9DQUlRQUNvZENodHljRjlvT25jMWFtbHJNa1p1V1dkMFdWUTRYM2RaVVRSU01YYxAB!2m1!1s0x3bae6adbe690ceaf:0x573e11979026538f",
    },
    {
      name: "places/ChIJr86Q5ttqrjsRj1MmkJcRPlc/reviews/Ci9DQUlRQUNvZENodHljRjlvT204MWIxWmxWVkUyWDJSNVdGUklhbU5IVmpKNWFrRRAB",
      relativePublishTimeDescription: "2 months ago",
      rating: 5,
      text: {
        text: "We are very happy in this school. Each and every personal take care my kid and also they teach every good and polite why especially my daughter likes this school because she feels very happy in this school.",
        languageCode: "en",
      },
      originalText: {
        text: "We are very happy in this school. Each and every personal take care my kid and also they teach every good and polite why especially my daughter likes this school because she feels very happy in this school.",
        languageCode: "en",
      },
      authorAttribution: {
        displayName: "Lakshmi Atchula",
        uri: "https://www.google.com/maps/contrib/110730498038221169170/reviews",
        photoUri:
          "https://lh3.googleusercontent.com/a/ACg8ocKMU4Zdow17P5CQHyc4USmjEaZlAIdwdOFfrzSY2cdY1nPMRw=s128-c0x00000000-cc-rp-mo",
      },
      publishTime: "2026-03-30T05:24:48.270332692Z",
      flagContentUri:
        "https://www.google.com/local/content/rap/report?postId=Ci9DQUlRQUNvZENodHljRjlvT204MWIxWmxWVkUyWDJSNVdGUklhbU5IVmpKNWFrRRAB&d=17924085&t=1",
      googleMapsUri:
        "https://www.google.com/maps/reviews/data=!4m6!14m5!1m4!2m3!1sCi9DQUlRQUNvZENodHljRjlvT204MWIxWmxWVkUyWDJSNVdGUklhbU5IVmpKNWFrRRAB!2m1!1s0x3bae6adbe690ceaf:0x573e11979026538f",
    },
    {
      name: "places/ChIJr86Q5ttqrjsRj1MmkJcRPlc/reviews/Ci9DQUlRQUNvZENodHljRjlvT2xWRFZ6VlZPRWR3YmtwaGFsbGtiMWxFVkhOVGRWRRAB",
      relativePublishTimeDescription: "5 months ago",
      rating: 4,
      text: {
        text: "We are grateful for our 3 years journey in  Kidzee Doddakammanahalli (Nursery- Sr. KG). We are very happy with the school system and with the cooperative approach of the teachers for making my son Atharv more confident to participate in all the activities. We were certainly guided with the improvement my child needed in certain areas. Special thanks to Sheetal ma’am and Sukhwinder ma’am ( Sr.KG). Even the non-teaching staffs and the van driver Prashant were so kind and supportive throughout my child’s journey in Kidzee.\nNot to forget the initial days where his class teachers, Nishi ma’am and Santhiya ma’am for showering so much of care and love to my son Atharv, that it made him more confident to go to school everyday.\nThanks to all the staff of Kidzee DKHalli. 🙏🏽👏🏻",
        languageCode: "en",
      },
      originalText: {
        text: "We are grateful for our 3 years journey in  Kidzee Doddakammanahalli (Nursery- Sr. KG). We are very happy with the school system and with the cooperative approach of the teachers for making my son Atharv more confident to participate in all the activities. We were certainly guided with the improvement my child needed in certain areas. Special thanks to Sheetal ma’am and Sukhwinder ma’am ( Sr.KG). Even the non-teaching staffs and the van driver Prashant were so kind and supportive throughout my child’s journey in Kidzee.\nNot to forget the initial days where his class teachers, Nishi ma’am and Santhiya ma’am for showering so much of care and love to my son Atharv, that it made him more confident to go to school everyday.\nThanks to all the staff of Kidzee DKHalli. 🙏🏽👏🏻",
        languageCode: "en",
      },
      authorAttribution: {
        displayName: "Little_ Dino",
        uri: "https://www.google.com/maps/contrib/102330125703858986566/reviews",
        photoUri:
          "https://lh3.googleusercontent.com/a-/ALV-UjV_q3zCZk4skgXzXe7HVissNnn9s_Gv1mqUJfbxqUTvOIJpj0xv=s128-c0x00000000-cc-rp-mo",
      },
      publishTime: "2025-12-22T10:49:52.685389016Z",
      flagContentUri:
        "https://www.google.com/local/content/rap/report?postId=Ci9DQUlRQUNvZENodHljRjlvT2xWRFZ6VlZPRWR3YmtwaGFsbGtiMWxFVkhOVGRWRRAB&d=17924085&t=1",
      googleMapsUri:
        "https://www.google.com/maps/reviews/data=!4m6!14m5!1m4!2m3!1sCi9DQUlRQUNvZENodHljRjlvT2xWRFZ6VlZPRWR3YmtwaGFsbGtiMWxFVkhOVGRWRRAB!2m1!1s0x3bae6adbe690ceaf:0x573e11979026538f",
    },
  ],
  photos: [
    {
      name: "places/ChIJr86Q5ttqrjsRj1MmkJcRPlc/photos/AaVGc3kzAlpaNDm62xGdtl6Lne6ui2E51liazur6FyxDN5YQj74C3_HgEdNlryLvrpbMJdk8IRkOgRvAog5kXzo8WIVhseupTPaXitgkZYWPQTx5iFt3nWqShjkMgcOnz8frA09rhATmsxYmlcp6ZPvbP_40x6THgVSaClc6fsG9K56RTT-FNiVzmULBwPCB1qTI0xbpmSnwX5Pq8l70rGH3Q_GkSVxYSE8NX0Y1zLNX5V3qMV5-xBmeiSst4dRiCk9x53LuzCyQ3DhyObE2Mu9kXa9RULhK6U6_GRBJ5uSq0YwjTf07S5PuPluvAOZXOizBHIAnu6Qnr9s5EkdLiDJXR8Vanyg4NQGjr7-UkIpjcZceN7ujmTgSGNK-Qho054HwRa7dXBfF11osK9OOpK4Rxgiocj7oat_ai8tyVzYso06S7w",
      widthPx: 3024,
      heightPx: 4032,
      authorAttributions: [
        {
          displayName: "Surya Mithran",
          uri: "https://maps.google.com/maps/contrib/109256537732630295381",
          photoUri:
            "https://lh3.googleusercontent.com/a/ACg8ocKKr232QUb0T24WnHCxFoGGjohvqgUC185xhs6bblT52XtRmQ=s100-p-k-no-mo",
        },
      ],
      flagContentUri:
        "https://www.google.com/local/imagery/report/?cb_client=maps_api_places.places_api&image_key=!1e10!2sCIHM0ogKEICAgMDws7-aGA&hl=en-US",
      googleMapsUri:
        "https://www.google.com/maps/place//data=!3m4!1e2!3m2!1sCIHM0ogKEICAgMDws7-aGA!2e10!4m2!3m1!1s0x3bae6adbe690ceaf:0x573e11979026538f",
    },
    {
      name: "places/ChIJr86Q5ttqrjsRj1MmkJcRPlc/photos/AaVGc3mwR6eFjd5Sld09txkVSEhXGlhrIZBhB49aPQbvPBiTR5bKlfrl1NNe3kZFIZnyuPHLEaoxVwD_3zF87z_gQwv076N8-E2rNbguNVWRqOHtTIM7Y8l0JJKA5gn3IzaV53mbwR74mj619mmb4VpZA9KMzfURXGxRRsNZNaR8q3rvdpxLQwCU3TRwvhSe6xiV4P6LPCtziybX-ZsmUXnz-yPZomX3UR2wcyZqygDtJQ-3lUH0NLyuhVihO9VDYRin970x5JT2B4WZPXn1W48jIWQZMRoeODWB-8w_rzsg60lQpFuHSkBY8sR04Q-oz7KYP01JMdEIim-XCg1i92jGVt6IQ73OeHZKMVAtpQU_GuZBD0Qkpth6JYhfOgsqzSkVWrjiywBm4yMc73u_RqLsyva8XpXe3Uwk8BKKkHu1pvcQUg",
      widthPx: 4000,
      heightPx: 3000,
      authorAttributions: [
        {
          displayName: "Nitesh Sahay",
          uri: "https://maps.google.com/maps/contrib/110231680615717351381",
          photoUri:
            "https://lh3.googleusercontent.com/a-/ALV-UjW7A10KauFHCKVIRgi023IveZCfXbR7q0Y0w6qqOH69opuRTPsykg=s100-p-k-no-mo",
        },
      ],
      flagContentUri:
        "https://www.google.com/local/imagery/report/?cb_client=maps_api_places.places_api&image_key=!1e10!2sCIHM0ogKEICAgICu8d3AWg&hl=en-US",
      googleMapsUri:
        "https://www.google.com/maps/place//data=!3m4!1e2!3m2!1sCIHM0ogKEICAgICu8d3AWg!2e10!4m2!3m1!1s0x3bae6adbe690ceaf:0x573e11979026538f",
    },
    {
      name: "places/ChIJr86Q5ttqrjsRj1MmkJcRPlc/photos/AaVGc3k4kD9elZgyeXcXj457pBlLGERYdiMbrgH2_Fkbi6IEtthLkHU3N5UfpCb0UwWBm5SoeixZioabSAe_up8d1zN1a3AXbU51buk-SqWaUOekhlEYvn_E5lISzt-B2s7bdOCu6Mw2_gYOo_7znHWbh0i8flL_T0vQ2OpMLBEYpYUa3UrQJp1_TGoG3fFEVrJeMuWIRmKnE-VFjNNAS35T1tPA_PySfXLNnPRcyn9nuKtHg6KdT2bfh9MIlH00ZWcnoLcF9NabBQwsis_i0nMN1hKmzQ6ebMRbJoTC47Ad5OHs88mNpFNH5bTyjNVlxs5gHuJqD1Fj75YSiDaNta6iHn5Uxz-aEImZlfDnN881PiGZG_Vt9UItKiHMfw-Ij9EGgILRwfurAZqLqIGP0Q-5IBWUj_zuLnoT_zHG6teeE_iNFw",
      widthPx: 1600,
      heightPx: 1200,
      authorAttributions: [
        {
          displayName: "Kidzee Doddakammana halli",
          uri: "https://maps.google.com/maps/contrib/109534070814253616843",
          photoUri:
            "https://lh3.googleusercontent.com/a/ACg8ocJbKmuM80sWysECHeWUx9Q5x21f7OHhmUfxoUuqxe3WQXa4=s100-p-k-no-mo",
        },
      ],
      flagContentUri:
        "https://www.google.com/local/imagery/report/?cb_client=maps_api_places.places_api&image_key=!1e10!2sCIHM0ogKEICAgICk4JXLZg&hl=en-US",
      googleMapsUri:
        "https://www.google.com/maps/place//data=!3m4!1e2!3m2!1sCIHM0ogKEICAgICk4JXLZg!2e10!4m2!3m1!1s0x3bae6adbe690ceaf:0x573e11979026538f",
    },
    {
      name: "places/ChIJr86Q5ttqrjsRj1MmkJcRPlc/photos/AaVGc3n4JQ50JHBG-DUrtcqukqZYoF5AOEr5gQsHAsbYEZcyQrffHYBZaMqvRIfeW8z22TIc6-fVO22QDCus_2BAVlAbuobRYgRl8fj_kl_P5VkSLzq7ss54JEaxuCHaqMgPlZuARJo-UeKq09ITohEr9-jJ99-rfMJHox8L8FcgW60Vga7T8TxBzgR1qVs35RcBR3hg4vFwQWooVGtz3kuD2IqCI0F77m1jVL29vQGVwJD3-oN1rimJRlPX_X3sGRr10lvneE_1NjBUVrSlZm0sE4woGYsFCGph06IpalRWrEPs1jc6Fv5YfcgXu5AZ_MR22MwSL-FsBL5L6ffm5FkZRdK-GSTiXdwObMabvNIL4XRwvRGwV4cQQkWaQMp4DvAYt-SWqYp4GGWnM0shWt9bNUc9C63wCE3e9DI9NaS3qro",
      widthPx: 1600,
      heightPx: 1200,
      authorAttributions: [
        {
          displayName: "Kidzee Doddakammana halli",
          uri: "https://maps.google.com/maps/contrib/109534070814253616843",
          photoUri:
            "https://lh3.googleusercontent.com/a/ACg8ocJbKmuM80sWysECHeWUx9Q5x21f7OHhmUfxoUuqxe3WQXa4=s100-p-k-no-mo",
        },
      ],
      flagContentUri:
        "https://www.google.com/local/imagery/report/?cb_client=maps_api_places.places_api&image_key=!1e10!2sCIHM0ogKEICAgICk4JXBUA&hl=en-US",
      googleMapsUri:
        "https://www.google.com/maps/place//data=!3m4!1e2!3m2!1sCIHM0ogKEICAgICk4JXBUA!2e10!4m2!3m1!1s0x3bae6adbe690ceaf:0x573e11979026538f",
    },
    {
      name: "places/ChIJr86Q5ttqrjsRj1MmkJcRPlc/photos/AaVGc3n0Lyh-AGXbT0Wp8gayvq957ixO9zdpUUqj5AXz1uT_Jr8lGp24GK0q60yfXJMRZT3IExTWBuI6UvcFQ_yDg1nH_Pw8_3OJQXPk3X4RowJo5mdcv_wiqTqRRCV8vwk9DC86-_sgb1qZkDYFXXlN6pFZkuULUXfyrif4Jscra9Jsdg7owbfkVTsUt-JfJCJmxAIKtnlmhDx7xAUg9fC3gf6o0danOQBEXP1Q-eui6EvoGZOafKVm79sxCn2rOlnqHQwXfBnUlSUvJlGyWvQfNN_58HQoRaneprKz3X5lWdC5Ea8VpE6JpEbmUMzkMOPvtVNhyI7vr-w6dzy7ZK8LTiom9DEpIScv4rmIlxvRYG0R3tYvJZDb1MNeEARzRFr9ZoRYcKD_654AsbA5tYg7YjEnB9G0zscmIbjMnv21O7nC5g",
      widthPx: 3872,
      heightPx: 2592,
      authorAttributions: [
        {
          displayName: "Kidzee Doddakammanahalli",
          uri: "https://maps.google.com/maps/contrib/116195195824573827556",
          photoUri:
            "https://lh3.googleusercontent.com/a/ACg8ocK4MfpnxaviGz4yavRzOeoFxWnq39n-QONx1THgCBp5twklew=s100-p-k-no-mo",
        },
      ],
      flagContentUri:
        "https://www.google.com/local/imagery/report/?cb_client=maps_api_places.places_api&image_key=!1e10!2sCIHM0ogKEICAgIDp0u63BQ&hl=en-US",
      googleMapsUri:
        "https://www.google.com/maps/place//data=!3m4!1e2!3m2!1sCIHM0ogKEICAgIDp0u63BQ!2e10!4m2!3m1!1s0x3bae6adbe690ceaf:0x573e11979026538f",
    },
    {
      name: "places/ChIJr86Q5ttqrjsRj1MmkJcRPlc/photos/AaVGc3ld1Q4LIWw_NYy2KNjBm7fP9Photyz1TvURAivLqQGdaeMJPJKyDbkLREFLZjZMKd4ybhlvpBXefAb8p4fMadK8xBjQEV_XKWlbN5C9beRThbGSy0o5u9KqthwitYd6kNNU7Rls5t9G_NyawU6VvTD6c1u9iN0DBI5ixqtROt64ra7ficoB9CLo7iPEMgBlMlqZ-xcSYaMElal_s2a2SeD0hQsWOSlMRpwYBAH5VTi90TNOk6OPtrvaM7_BKdg93wjF-LF5-gRaZ4DNNSFcLmJUOHCOvip0hC5OivLaBjZr8CIaUwr_Mo4yNWkOg6pGuBydrAHcThA1nNWboFBFejZWloIp8dEOGz-pK40kXYpo1JBg6FY94BLwLNugrqd6kPdHTNFkS3m-m20_vJsuecKzE0cu3SpNCQQv_aRvwVdswrc",
      widthPx: 1600,
      heightPx: 1200,
      authorAttributions: [
        {
          displayName: "Kidzee Doddakammana halli",
          uri: "https://maps.google.com/maps/contrib/109534070814253616843",
          photoUri:
            "https://lh3.googleusercontent.com/a/ACg8ocJbKmuM80sWysECHeWUx9Q5x21f7OHhmUfxoUuqxe3WQXa4=s100-p-k-no-mo",
        },
      ],
      flagContentUri:
        "https://www.google.com/local/imagery/report/?cb_client=maps_api_places.places_api&image_key=!1e10!2sCIHM0ogKEICAgICk4JXL5gE&hl=en-US",
      googleMapsUri:
        "https://www.google.com/maps/place//data=!3m4!1e2!3m2!1sCIHM0ogKEICAgICk4JXL5gE!2e10!4m2!3m1!1s0x3bae6adbe690ceaf:0x573e11979026538f",
    },
    {
      name: "places/ChIJr86Q5ttqrjsRj1MmkJcRPlc/photos/AaVGc3nOZio5fe2XYA4gXA3Og_2vHXta59STYa5CZbf7GHukNgj_FNnTW-64_WhQ6r3XO3Z5FRZv8_MC12wBRE8zxZCIuaZNsu4TNlriqxrAwKMfFiN9iScKRhDbKYy-Ki9jq4i3qWfSLVdU8shbKSPnOzIpS838k64xjHdgVm9xJznZCe2AR5acZSJ-VQqv_d3SS6H1qxcTWKxqfcrp3cnqBck8Hbl1nt-QgbADcYSF8OfWCBKyRktNBiELewsrad2m02u5wAddQmQiMsVGkyC8D_5csbUKh-6JIBDDd7U74mVvsRTRYL-SqNSEZlOPPUz4-5ssoo3nT1SBbPCOQ2v2tZJYCIeJuUnDto-9Lba-aNeiHJsWuPEZ06zAM05HrusObzR3Ie9GV4pXbVNhr8l2AEaIPtCgvUm-YSjtw1S8lBI",
      widthPx: 1600,
      heightPx: 1200,
      authorAttributions: [
        {
          displayName: "Kidzee Doddakammana halli",
          uri: "https://maps.google.com/maps/contrib/109534070814253616843",
          photoUri:
            "https://lh3.googleusercontent.com/a/ACg8ocJbKmuM80sWysECHeWUx9Q5x21f7OHhmUfxoUuqxe3WQXa4=s100-p-k-no-mo",
        },
      ],
      flagContentUri:
        "https://www.google.com/local/imagery/report/?cb_client=maps_api_places.places_api&image_key=!1e10!2sCIHM0ogKEICAgICk4JXBSA&hl=en-US",
      googleMapsUri:
        "https://www.google.com/maps/place//data=!3m4!1e2!3m2!1sCIHM0ogKEICAgICk4JXBSA!2e10!4m2!3m1!1s0x3bae6adbe690ceaf:0x573e11979026538f",
    },
    {
      name: "places/ChIJr86Q5ttqrjsRj1MmkJcRPlc/photos/AaVGc3lKpoJnppNrdEhhUg8rACKGADfkkV10U_AuVBWLCcuUlEQdTQr03JYitn5Aera1bn40X61o8WmNpL6qqYEdTj1XrlbWcS0UOxTmaKgrQkifaIiVt_GOPNU28oV8n3WaiWyhfbD0VQ80o7i0pLm00MyFEiJ5tsdgRG46nMYAr5Drx2BjZKdvePnDXBNbA694IKHL96tkjv4Sryx4l8iIm8UzvQXLw_S5-CQfbyA1I-PRZwR_oY7vgNRVcnUhlw0phnXVp4EVm0YzBKbHST4oRv6nP_ptzshfV9AkCNTQ8OqCit3tFdtbVFfpEL-m42dUdb-XU9reTg_DjJ7vSQG1PAo6FbvkbLm5YKSDd85beM6dM8x4Y1n2VxmZKhmv3Yu8MlbXyrjmcj618kkzf8uQ8UFgi9qh2Dup4flmrEotFzAqMw",
      widthPx: 3872,
      heightPx: 2592,
      authorAttributions: [
        {
          displayName: "Kidzee Doddakammanahalli",
          uri: "https://maps.google.com/maps/contrib/116195195824573827556",
          photoUri:
            "https://lh3.googleusercontent.com/a/ACg8ocK4MfpnxaviGz4yavRzOeoFxWnq39n-QONx1THgCBp5twklew=s100-p-k-no-mo",
        },
      ],
      flagContentUri:
        "https://www.google.com/local/imagery/report/?cb_client=maps_api_places.places_api&image_key=!1e10!2sCIHM0ogKEICAgIDp0u6XMw&hl=en-US",
      googleMapsUri:
        "https://www.google.com/maps/place//data=!3m4!1e2!3m2!1sCIHM0ogKEICAgIDp0u6XMw!2e10!4m2!3m1!1s0x3bae6adbe690ceaf:0x573e11979026538f",
    },
    {
      name: "places/ChIJr86Q5ttqrjsRj1MmkJcRPlc/photos/AaVGc3lGkY0HSRW9Z8hZErXZ6p7rLovHYiXOeD6JkfpAjjDlEN0laZiOQUNGIvU_bF5hbjZJlmNp3_HzAPk2BTtB2ZGMeIKV5sdDCguciNBx6T00F-LT0OcCyOcSHabWBv-kird0k886PO7M2I9-ebv5MkVEg84UNy44oTX4UdI4eswh1eTcRBwV34Ijs45mjAhqmpol-6DnevztMc6bau5qSp1ckSAP8QmMLQ2u_Xj5eHVnrBcKtN43xq4l8uckTJfQiYtxqQTSGJRBcMVSQm1aVn2TsTTSrO67Pl3CyuQxUCmDhx6Jljn1ja24KSPWuLb6g2mB1j7zGDqD_z99BZCeZkp5br5pFzUg2gC_gdbJ42M01ul6ZKIcdiLXgf6nI1L18UgG7WC_JgN40x94ZLefKsnNHzjS9p0p0W2n5nnRxVYMAT6K",
      widthPx: 1600,
      heightPx: 1200,
      authorAttributions: [
        {
          displayName: "Kidzee Doddakammana halli",
          uri: "https://maps.google.com/maps/contrib/109534070814253616843",
          photoUri:
            "https://lh3.googleusercontent.com/a/ACg8ocJbKmuM80sWysECHeWUx9Q5x21f7OHhmUfxoUuqxe3WQXa4=s100-p-k-no-mo",
        },
      ],
      flagContentUri:
        "https://www.google.com/local/imagery/report/?cb_client=maps_api_places.places_api&image_key=!1e10!2sCIHM0ogKEICAgICk4JXBkAE&hl=en-US",
      googleMapsUri:
        "https://www.google.com/maps/place//data=!3m4!1e2!3m2!1sCIHM0ogKEICAgICk4JXBkAE!2e10!4m2!3m1!1s0x3bae6adbe690ceaf:0x573e11979026538f",
    },
    {
      name: "places/ChIJr86Q5ttqrjsRj1MmkJcRPlc/photos/AaVGc3mhfFdiMYk6fUlzej17kv5CLVoD4hsKcQHQl5CSO0u65p4hLn5Z6AilSpFuKeVYSXBsMS-Wh1ivXcY_sZZaIHOoyZ_qbix-hodSxAw_KNOEEzR51AYk-QrzRVYf2L5EwwRy_SeEUOYPIV5Wz7Xf7FOAe8Ugpnu_JU0Jqq2yDb7NYIQKH7ra9k04ok8lp-kfFh0vfM8xURUESjm-ciEF4CCSDjeBUzNCRvQU-F4fVfQwvqKsi3Y5Y_o3enYup7hpof1AGbXCLBqZARvP9BktO1q78TfZ41ngesVPyKA38qSd5kAS35FA-jn9rOxDqPamad7Z_ADuhlw3DoL-9Ke1QG-7f1AhyoWb95-XPAm7-yFL_RxxdRCqYn6bd55VJKYYK1SlVHGJ1TZUcKxtruueqVGH_lNShny3Fplv6_DMSJVxw0SI",
      widthPx: 4000,
      heightPx: 3000,
      authorAttributions: [
        {
          displayName: "Nitesh Sahay",
          uri: "https://maps.google.com/maps/contrib/110231680615717351381",
          photoUri:
            "https://lh3.googleusercontent.com/a-/ALV-UjW7A10KauFHCKVIRgi023IveZCfXbR7q0Y0w6qqOH69opuRTPsykg=s100-p-k-no-mo",
        },
      ],
      flagContentUri:
        "https://www.google.com/local/imagery/report/?cb_client=maps_api_places.places_api&image_key=!1e10!2sCIHM0ogKEICAgICu8d3AjAE&hl=en-US",
      googleMapsUri:
        "https://www.google.com/maps/place//data=!3m4!1e2!3m2!1sCIHM0ogKEICAgICu8d3AjAE!2e10!4m2!3m1!1s0x3bae6adbe690ceaf:0x573e11979026538f",
    },
  ],
  pureServiceAreaBusiness: false,
  addressDescriptor: {
    landmarks: [
      {
        name: "places/ChIJZdqjB6drrjsRus_xTQMWFls",
        placeId: "ChIJZdqjB6drrjsRus_xTQMWFls",
        displayName: {
          text: "GSN Residency",
          languageCode: "en",
        },
        types: ["establishment", "point_of_interest"],
        spatialRelationship: "DOWN_THE_ROAD",
        straightLineDistanceMeters: 27.125576,
        travelDistanceMeters: 27.124983,
      },
      {
        name: "places/ChIJ1XqaYHlrrjsRvtjXa1RJIWE",
        placeId: "ChIJ1XqaYHlrrjsRvtjXa1RJIWE",
        displayName: {
          text: "Noble Multispeciality Hospitals",
          languageCode: "en",
        },
        types: ["establishment", "health", "hospital", "point_of_interest"],
        spatialRelationship: "AROUND_THE_CORNER",
        straightLineDistanceMeters: 123.0575,
        travelDistanceMeters: 150.43887,
      },
      {
        name: "places/ChIJ82uadmxrrjsRiZpkFpU382E",
        placeId: "ChIJ82uadmxrrjsRiZpkFpU382E",
        displayName: {
          text: "Indus Developers",
          languageCode: "en",
        },
        types: ["establishment", "point_of_interest"],
        straightLineDistanceMeters: 131.11578,
        travelDistanceMeters: 390.16934,
      },
      {
        name: "places/ChIJWVYRlxJrrjsRAoYWI8m79y8",
        placeId: "ChIJWVYRlxJrrjsRAoYWI8m79y8",
        displayName: {
          text: "Shiva Temple",
          languageCode: "en",
        },
        types: [
          "establishment",
          "hindu_temple",
          "place_of_worship",
          "point_of_interest",
        ],
        straightLineDistanceMeters: 74.8948,
        travelDistanceMeters: 295.44946,
      },
      {
        name: "places/ChIJ1ZnNcNtqrjsRfzEN4JUbuEo",
        placeId: "ChIJ1ZnNcNtqrjsRfzEN4JUbuEo",
        displayName: {
          text: "Amoda Valmark",
          languageCode: "en",
        },
        types: ["establishment", "point_of_interest"],
        straightLineDistanceMeters: 260.62213,
        travelDistanceMeters: 464.4552,
      },
    ],
    areas: [
      {
        name: "places/ChIJj5V--N5qrjsRbazwXZULfbw",
        placeId: "ChIJj5V--N5qrjsRbazwXZULfbw",
        displayName: {
          text: "Tejaswini Nagar",
          languageCode: "en",
        },
        containment: "WITHIN",
      },
      {
        name: "places/ChIJj5V--N5qrjsRWTJTDQEbro8",
        placeId: "ChIJj5V--N5qrjsRWTJTDQEbro8",
        displayName: {
          text: "Phase 2",
          languageCode: "en",
        },
        containment: "WITHIN",
      },
      {
        name: "places/ChIJDfngqN5qrjsRHQAUlZhW7KE",
        placeId: "ChIJDfngqN5qrjsRHQAUlZhW7KE",
        displayName: {
          text: "Pariwar Passions",
          languageCode: "hi",
        },
        containment: "NEAR",
      },
    ],
  },
  googleMapsLinks: {
    directionsUri:
      "https://www.google.com/maps/dir//''/data=!4m7!4m6!1m1!4e2!1m2!1m1!1s0x3bae6adbe690ceaf:0x573e11979026538f!3e0?g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAIYBCAA",
    placeUri:
      "https://maps.google.com/?cid=6286481472511955855&g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAIYBCAA",
    writeAReviewUri:
      "https://www.google.com/maps/place//data=!4m3!3m2!1s0x3bae6adbe690ceaf:0x573e11979026538f!12e1?g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAIYBCAA",
    reviewsUri:
      "https://www.google.com/maps/place//data=!4m4!3m3!1s0x3bae6adbe690ceaf:0x573e11979026538f!9m1!1b1?g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAIYBCAA",
    photosUri:
      "https://www.google.com/maps/place//data=!4m3!3m2!1s0x3bae6adbe690ceaf:0x573e11979026538f!10e5?g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAIYBCAA",
  },
  timeZone: {
    id: "Asia/Calcutta",
  },
  postalAddress: {
    regionCode: "IN",
    languageCode: "en-US",
    postalCode: "560083",
    administrativeArea: "Karnataka",
    locality: "Doddakammanahalli, Bengaluru",
    addressLines: [
      "112, 4th Cross Central Excise Layout, Phase 2, Tejaswini Nagar",
      "Begur Hobli",
    ],
  },
  googleMapsTypeLabel: {
    text: "Preschool",
    languageCode: "en-US",
  },
}
