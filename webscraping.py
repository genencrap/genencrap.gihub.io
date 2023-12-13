
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from datetime import datetime

def check_date_availability_selenium(url, input_date_str):
    # 날짜 형식 변환
    input_date = datetime.strptime(input_date_str, "%Y-%m-%d")
    formatted_date = input_date.strftime("%B %d, %Y")  # 예: "December 15, 2023"

    # Selenium 웹 드라이버 설정 (여기서는 Chrome을 사용)
    driver = webdriver.Chrome("chromedriver.exe")  # ChromeDriver 경로 지정 필요

    try:
        driver.get(url)

        # 웹 페이지가 로드될 때까지 기다림
        WebDriverWait(driver, 10).until(
            EC.presence_of_element_located((By.CSS_SELECTOR, "button[aria-label]"))
        )

        # 특정 날짜에 해당하는 버튼 요소 찾기
        button = driver.find_element(By.CSS_SELECTOR, f"button[aria-label='{formatted_date}']")
        aria_pressed = button.get_attribute('aria-disable')

        return aria_pressed != 'true'  # 'true'가 아니면 선택 가능
    except Exception as e:
        print("Error:", e)
        return None
    finally:
        driver.quit()

# 사용 예시
url = "https://tickets.museivaticani.va/home/calendar/visit/Biglietti-Musei"
date_to_check = "2023-12-15"  # 예시 날짜
availability = check_date_availability_selenium(url, date_to_check)
print("Is the date available:", availability)
