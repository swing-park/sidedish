package codsquad.team17.sidedish.dto;

public class ErrorResposeDto {
    private String message;

    public ErrorResposeDto(String message) {
        this.message = message;
    }

    public String getMessage() {
        return message;
    }
}
