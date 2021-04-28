package codsquad.team17.sidedish.exception;

public class DishCategoryNotFoundException extends RuntimeException {
    private static final String DISH_CATEGORY_NOT_FOUND_MESSGE = "요청하는 DISH CATEOGRY가 존재하지 않습니다.";

    public DishCategoryNotFoundException() {
        super(DISH_CATEGORY_NOT_FOUND_MESSGE);
    }
}
