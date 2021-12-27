import ChapterTest from "../pages/chapter-test";

export const FakeData = [
  {
    name: "Nhận biết",
    description: "#a8edea → #fed6e3",
    css: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
    height: 600,
    nav: '/chapter-1/nhanbiet',
    question: [
      {
        id: 0,
        type: 'single-choice',
        request: 'de bai di hoc luc 6 h den truong luc may gio',
        answer: ['9:30','9:34','9:40','9:45'],
        correctAnswer: '9:40'
      },
      {
        id: 1,
        type: 'input',
        request: 'de bai di hoc luc 6 h den truong luc may gio',
      }
    ]
  },
  {
    name: "Thêm bớt giờ",
    description: "#f5f7fa → #c3cfe2",
    css: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
    height: 600,
    nav: '/chapter-1/thembotgio',
  }
];
