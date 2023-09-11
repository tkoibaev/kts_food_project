export interface dishInfo {
    id: number;
    preparationMinutes: string;
    cookingMinutes: string;
    image: string;
    aggregateLikes: string;
    servings: string;
    readyMinutes: string;

    title: string;

    summary: string;

    extendedIngredients: [];

    equipment: [];
  }

export interface cardInfoRequest {
    id: number;
    title: string;
    image: string;
    readyInMinutes: string;
    nutrition: {
      nutrients: {
        amount: number;
      }[];
      ingredients: {
        name: string;
      }[];
    };
}

export interface cardInfoProps {
    id: number;
    title: string;
    image: string;
    readyInMinutes: string;
    ccal: string;
    ings: string;
}
