import { useState, useEffect } from "react";
import { Card } from "entities";

export function useCard() {
  const [cache, setCache] = useState<Card[]>([]);

  function updateCache(cards: Card[]) {
    setCache(prev => {
      return prev.concat(cards).filter((value, index, self) => {
        return index === self.findIndex((i) => i.id === value.id)
      })
    });
  }

  function getCacheCard(id: string){
    return cache.find((card) => card.id === id);
  }

  return { cache, setCache, updateCache, getCacheCard };
}
