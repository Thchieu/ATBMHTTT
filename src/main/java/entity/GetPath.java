package entity;

public class GetPath {
    public String path() {
        // Lấy thông tin về hệ điều hành
        String osName = System.getProperty("os.name").toLowerCase();

        // Thiết lập thư mục download tùy thuộc vào hệ điều hành
        String path;
        if (osName.contains("win")) {
            // Windows
            path = System.getenv("USERPROFILE") + "\\Documents";
        } else if (osName.contains("nix") || osName.contains("nux") || osName.contains("mac")) {
            // Linux hoặc MacOS
            path = System.getProperty("user.home") + "/Documents";
        } else {
            // Nếu không phải là Windows, Linux hoặc MacOS, bạn có thể xác định một cách khác tùy thuộc vào hệ điều hành cụ thể
            path = "C:\\Documents"; // Mặc định cho các hệ điều hành khác
        }

        // Hiển thị đường dẫn thư mục download
        return path;
    }
}
