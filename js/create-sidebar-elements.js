// لیست کتابهای منوی بوک ها
const booksLists = [
  [
    "Fiction",
    "Anthologies & Short Stories",
    "Classics",
    "Crime Fiction",
    "historical Fiction",
    "Contemporary Fiction",
    "Poetry",
    "Romance",
    "Fantasy",
    "Science Fiction",
    "Horror",
    "Myths & Legends",
    "Graphic Novels",
    "Manga",
  ],
  [
    "Non-fiction",
    "Art",
    "Biography",
    "Business & Finance",
    "Climate & Sustainability",
    "Current affaris & Politics",
    "Diet & Fitness",
    "Fashon",
    "Food & Drink",
    "Gardening",
    "Health & Wellbeing",
    "History",
    "Home & Interiros",
    "Humour",
    "Language & Dictionaries",
    "Literary Theory & Criticism",
    "Medicine & nursing",
    "Nature",
    "Parenting",
    "Philosophy",
    "Photography",
    "Positive Living",
    "Psychology",
    "Puzzle Books",
    "Popular Science",
    "Spirituality & Religion",
    "Sport",
    "Transport (driver test)",
    "Travel",
    "True Crime",
  ],
  [
    "Childrens",
    "Children's 0 to 4",
    "Children's 5 to 8",
    "Children's 9 Plus",
    "Children's Activity Books",
    "Children's Annuals",
    "Children's Characters",
    "Children's Gift Books",
    "Children's Reference",
  ],
  [
    "Irish",
    "Irish Fiction",
    "Irish Crime-Fiction",
    "Irish History",
    "Irish Current Affairs",
    "Irish Biography",
    "Irish Sports Books",
    "Irish Food & Drink",
    "Irish Children's",
    "Irish Travel",
    "Irish Gift Books",
  ],
];
// فانکشن ساختن و نمایش لیست لینک کتاب های منوی بوکز
function displayLinksOfBooksMenu(booksLists) {
  booksLists.forEach((title) => {
    let ulElem = document.getElementById(title[0]); //المنتی که آی دی اش با اولین تایتل در آرایه مساوی است
    for (let i = 1; i < title.length; i++) {
      ulElem.insertAdjacentHTML(
        "beforeend",
        '<li class="book-menu-ul-li"><a href="#" class="book-menu-ul-a">' +
          title[i] +
          "</a></li>"
      );
    }
  });
}
displayLinksOfBooksMenu(booksLists);
// فانکشن ساخت آیتم های داخل سایدبار
function displayListsOfSideBar(booksLists) {
  booksLists.forEach((title) => {
    let ulElem = document.querySelector(`.${title[0]}`); //المنتی که کلاسی با عنوان اولین عنصر داخل ارایه دارد
    for (let i = 1; i < title.length; i++) {
      ulElem.insertAdjacentHTML(
        "beforeend",
        `<li class="side-menu-options">
                          <a href="#">${title[i]}</a>
                        </li>`
      );
    }
  });
}
displayListsOfSideBar(booksLists);
