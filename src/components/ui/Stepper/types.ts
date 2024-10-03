export interface StepperProps {
  /* Минимальное значение */
  minValue?: number;
  /* Максимальное значение */
  maxValue?: number;
  /* Шаг изменения значения */
  step?: number;
  /* Текущее количество */
  quantityValue: number;
  /* Функция для обновления значения количества */
  onQuantityUpdate: (value: number) => void;
}
