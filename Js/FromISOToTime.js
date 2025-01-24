export function formatDuration(duration) {
    // Проверяем, что строка начинается с "PT" — это базовое требование формата
    if (!duration.startsWith("PT")) {
      console.error(`Invalid duration format: ${duration}`);
      return "0:00"; // Возвращаем значение по умолчанию
    }
  
    // Пытаемся извлечь значения времени
    const match = duration.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/);
    if (!match) {
      console.error(`Failed to parse duration: ${duration}`);
      return "0:00"; // Возвращаем значение по умолчанию
    }
  
    const hours = match[1] || 0;
    const minutes = match[2] || 0;
    const seconds = match[3] || 0;
  
    if (hours > 0) {
      return `${hours}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    }
    return `${minutes}:${String(seconds).padStart(2, '0')}`;
  }