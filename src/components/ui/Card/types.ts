// Интерфейс для деталей товара
export interface CardDetails {
  /* Идентификатор товара */
  id: string;
  /* Название товара */
  name: string;
  /* Категория товара */
  category: string;
  /* Описание товара */
  description: string;
  /* Цена товара */
  price?: number;
  /* Рейтинг товара */
  rating?: number;
  /* Путь к изображению */
  imgSrc: string;
  /* Информация о деталях товара */
  details?: {
    features?: string[];
    dimensions?: {
      width?: string;
      height?: string;
      depth?: string;
    };
    materials?: string[];
    careInstructions?: string;
    colors?: string[];
  };
  /* Флаг, указывающий, добавлена карточка в избранное или нет */
  isFavorite?: boolean;
}

export interface CardProps {
  /* Детали товара */
  details: CardDetails;
  /* Обработчик клика по товару */
  onCardClick?: () => void;
  /* Обработчик клика по иконке сердечка */
  onHeartClick?: () => void;
  /* Добавлен товар в избранное или нет */
  isFavorite?: boolean;
}
