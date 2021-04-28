package codsquad.team17.sidedish.exception;

public class ItemNotFountException extends RuntimeException{
    private static final String ITEM_NOT_FOUND_MESSGE = "요청하는 ITEM이 존재하지 않습니다.";

    public ItemNotFountException() {
        super(ITEM_NOT_FOUND_MESSGE);
    }
}
