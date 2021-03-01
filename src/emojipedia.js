import React from "react";
const emojipedia = [
  {
    id: 1,
    emoji: "💪",
    name: "Tense Biceps",
    meaning:
      "“You can do that!” or “I feel strong!” Arm with tense biceps. Also used in connection with doing sports, e.g. at the gym."
  },
  {
    id: 2,
    emoji: "🙏",
    name: "Person With Folded Hands",
    meaning:
      "Two hands pressed together. Is currently very introverted, saying a prayer, or hoping for enlightenment. Is also used as a “high five” or to say thank you."
  },
  {
    id: 3,
    emoji: "🤣",
    name: "Rolling On The Floor, Laughing",
    meaning:
      "This is funny! A smiley face, rolling on the floor, laughing. The face is laughing boundlessly. The emoji version of “rofl“. Stands for „rolling on the floor, laughing“."
  },
  {
    id:4,
    emoji:"😀" ,
    name:"Grinning Face",
    meaning:"A yellow face with simple, open eyes and a broad, open smile, showing upper teeth and tongue on some platforms. Often conveys general pleasure and good cheer or humor."
  },
  {
    id:5,
    emoji:"😂",
    name: "Face with Tears of Joy",
    meaning:
"A yellow face with a big grin, uplifted eyebrows, and smiling eyes, each shedding a tear from laughing so hard. Widely used to show something is funny or pleasing." 
  },
  {
    id:6,
    emoji:"🤪",
    name:"Zany Face",
    meaning:
"A smiley making a silly face. A yellow face with a big grin and wide, white eyes, one larger than the other and in a wild, cockeyed expression. Many platforms, including Apple, depict its tongue stuck out and head tilted; others feature a full-toothed grin, giving it a more unhinged appearance."
  },
  {
    id:7,
    emoji:"🤗",
    name:"Hugging Face",
  meaning:
"A yellow face smiling with open hands, as if giving a hug. May be used to offer thanks and support,show love and care, or express warm, positive feelings more generally.Due to its hand gesture, often used to represent jazz hands, indicating such feelings as excitement, enthusiasm, or a sense of flourish or accomplishment."
  },
  {
    id:8,
    emoji:"🤥",
    name:"Lying Face",
    meaning:"A yellow face with raised eyebrows, enlarged eyes, slight frown, and long nose, indicating it’s telling a lie in the manner of Pinocchio. Like that character, Facebook's design features a wooden nose. May represent lying, a liar, and other concepts of deceit and dishonesty to varying degrees of intensity. Sometimes used to convey disbelief (e.g., You must be kidding) or feeling abashed (e.g., as if caught in the act of lying)."
  },
  {
    id:9,
    emoji:"😪",
    name:"Sleepy Face",
    meaning:
"A yellow face with closed eyes, mouth slightly open, and a blue snot bubble coming from its nose. Snot bubbles indicate a character is tired or sleeping in anime or manga. Not to be confused with 😴 Sleeping Face While sometimes used to convey sadness, dissastification, or illness, Sleepy Face is also not to be confused with 😢 Crying Face, 😥 Sad but Relieved Face, or other emojis with tear or sweat droplets. Samsung’s design previously featured two, cartoon-styled, sleeping-symbol Zz’s overhead."
  },
  {
    id:10,
    emoji:"😎",
    name: "Smiling Face with Sunglasses",
    meaning:
"A yellow face with a broad, closed smile wearing black sunglasses, as if a pair of classic Wayfarers. Often used to convey the slang sense of cool. May also express a confident, carefree attitude or that something is excellent."
  },
  {
    id:11,
    emoji:"😕",
    name:"Confused Face",
    meaning:"A yellow face with open eyes and a skewed frown, as if scrunching its cheeks or chewing its lips. A look of feeling unsure. An Google’s design heightens its intended puzzlement by including contorted eyebrows.While it can convey confusion, it is commonly used for moderate sadness, disappointment, and frustration, thanks to its frown."
  },
  {
    id:12,
    emoji:"🤟",
    name:"Love-You Gesture",
    meaning:"The gesture for “I love you” in American Sign Language, shown as a raised pinky (little) finger, index finger, and an extended thumb."
  },
  {
    id:13,
    emoji:"🖕",
    name:"Middle Finger",
    meaning:"A middle finger emoji, used in some western cultures as a rude or insulting gesture. The back of the hand is shown with the middle finger raised."
  },
  {
    id:14,
    emoji:"👌",
    name:"OK Hand",
   meaning:"A gesture showing the index finger and thumb touching to make an open circle. Represents “I’m okay” or “yes, that’s correct / good”."
  },
  {
    id:15,
    emoji:"👋",
    name:"Waving Hand",
   meaning:"A hand waving most commonly used to say “hello” or “goodbye”."
  },
  {
    id:16,
    emoji:"😡",
    name:"Pouting Face",
    meaning:"A red face with an angry expression: frowning mouth with eyes and eyebrows scrunched downward. Bears the same expression as 😠 Angry Face on most platforms and may convey more intense degrees of anger, e.g., hate or rage."
  },
  {
    id:17,
    emoji:"🙃",
    name:"Upside-Down Face",
    meaning:"A classic smiley, turned upside down. Implemented as a flipped version of 🙂 Slightly Smiling Face on most platforms."
  },
  {
    id:18,
    emoji:"😍",
    name:"Smiling Face with Heart-Eyes",
    meaning:" A yellow face with an open smile, sometimes showing teeth, and red, cartoon-styled hearts for eyes. Often conveys enthusiastic feelings of love, infatuation, and adoration, e.g., I love/am in love with this person or thing."
  },
  {
    id:19,
    emoji:"😝",
    name:"Squinting Face with Tongue",
    meaning:"A yellow face with scrunched, X-shaped eyes and a big grin, sticking out its tongue. Often conveys a sense of fun, excitement, playfulness, hilarity, and happiness, as if saying Squee! or Awesome!"
  },
  {
    id:20,
    emoji:"🤫",
    name: "Shushing Face",
    meaning:"A yellow face placing an index finger over pursed lips, as if issuing Shh! or Shush! for silence. Some platforms feature raised eyebrows. Apple’s design suggests the face is tilting back slightly. May convey silence, quiet, secrecy, and discreetness. May also create a sense of buzz and anticipation, e.g., an exclusive sneak peek or news scoop."
  },
  {
    id:21,
    emoji:"🥱",
    name:"Yawning Face",
    meaning:"A yellow face with eyes closed and mouth wide open covered by a hand. Captured mid-yawn, this may represent having insufficient sleep, or to imply boredom with a person or topic."
  },
  {
    id:22,
    emoji:"😙",
    name: " Kissing Face with Smiling Eyes",
  meaning:
"A yellow face with smiling eyes and puckered lips giving a kiss. Commonly conveys sentiments of love and affection.Like 😗 Kissing Face, this emoji is sometimes taken to represent whistling, especially when paired with a musical note. May convey such feelings as surprise, admiration, contempt, or feigned innocence, as a person with hands in pocket casually whistling after wrongdoing, as if saying Nothing to look at here."
  },
  {
    id:23,
    emoji:"🥴",
    name:"Woozy Face",
   meaning:
"A yellow face with a crumpled mouth and a cockeyed expression, as if tired and emotional from inebriation or smitten with love. Depicted with raised or furrowed eyebrows and at least one eye half-open. WhatsApp's design features a tongue hanging out. Meaning widely varies, but commonly conveys intoxication or infatuation. Its dazed expression may also represent such feelings or states as bewilderment, irritation, disgust, exhaustion, wackiness, or complete satisfaction."
  },
  {
    id:24,
    emoji:"🤮",
    name:"Face Vomiting",
   meaning:
     "A yellow face with scrunched, X-shaped eyes spewing bright-green vomit. May represent physical illness or disgust, more intensely so than 🤢 Nauseated Face."
  },
  {
    id:25,
    emoji:"💩",
    name:"Pile of Poo",
    meaning:"A swirl of brown poop, shaped like soft-serve ice cream with large, excited eyes and a big, friendly smile.May be used to represent feces and other bathroom topics as well as stand in for their many related slang terms. It also enjoys a wide range of idiosyncratic applications, such as conveying a sense of whimsy or silliness, given its fun, happy expression."
  },
  {
    id:26,
    emoji:"👽",
    name: "Alien",
    meaning:
     "A classic alien face. The oval, bare head of a gray or green alien with large black eyes and a slight, friendly smile. Samsung depicts nostrils, Facebook a nose.May represent extraterrestrial life or topics concerning outer space, but commonly conveys a playful sense of weirdness or strangeness, as if someone or something is out there or from another planet"
  },
  {
    id:27,
    emoji:"👻",
    name:"Ghost",
   meaning:"Boo! A white, cartoon ghost making a silly face. Its tongue is stuck out and arms are outstretched, as if trying to scare someone in a friendly way. Several platforms feature one larger, bulging eye. Resembles a classic ghost costume for Halloween. May also be used to convey something or someone is fun or goofy. Thanks to its raised arms, some use this emoji as a way of expressing an excited Yay!"
  },
  {
    id:28,
    emoji:"👏",
    name:"Clapping Hands",
    meaning:
       "Two hands clapping emoji, which when used multiple times can be used as a round of applause."
  },
  {
    id:29,
    emoji:"✌️",
    name:"Victory Hand",
    meaning:"Most commonly known as a ✌️ Peace Sign, but traditionally called as a Victory Hand. Two fingers held up on one hand making a V sign."
  },
  {
    id:30,
    emoji:"😌",
    name:"Relieved Face",
    meaning:
     "A yellow face with soft, closed eyes, raised eyebrows, and a slight smile. Facebook’s design features a slightly open mouth, as if sighing. Conveys various pleasant feelings, including contentment, calm, peace, and relief. May also convey feelings of happiness or good-natured humor more generally."
  }

];
export default emojipedia;
