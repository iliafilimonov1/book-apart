export interface ImageProps {
  /* URL изображения */
  src: string;
  /* Класс CSS для изображения */
  className?: string;
  /* Альтернативный текст для изображения */
  alt?: string;
  /* Флаг для критичных изображений */
  isCritical?: boolean;
}
