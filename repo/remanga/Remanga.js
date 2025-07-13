// Пример заглушки
class RemangaSource {
  constructor() {
    this.name = "Remanga";
    this.baseUrl = "https://remanga.org";
  }

  getMangaDetails(id) {
    // Здесь должен быть реальный код
    return {};
  }
}

function createSource() {
  return new RemangaSource();
}
