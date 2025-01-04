-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 04, 2025 at 07:04 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `jollibeee_v1`
--

-- --------------------------------------------------------

--
-- Table structure for table `jollibee_advertisement`
--

CREATE TABLE `jollibee_advertisement` (
  `ads_aid` int(11) NOT NULL,
  `ads_is_active` tinyint(1) NOT NULL,
  `ads_image` varchar(30) NOT NULL,
  `ads_title` varchar(50) NOT NULL,
  `ads_datetime` varchar(20) NOT NULL,
  `ads_created` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `jollibee_advertisement`
--

INSERT INTO `jollibee_advertisement` (`ads_aid`, `ads_is_active`, `ads_image`, `ads_title`, `ads_datetime`, `ads_created`) VALUES
(16, 1, 'slider-1.jpg', 'Sample 1', '2024-12-18 14:05:10', 2024),
(17, 1, 'slider-2.png', 'Sample 2', '2024-12-18 14:05:26', 2024),
(18, 1, '#hanni #newjeans.jpg', 'Sample 3', '2024-12-19 08:16:32', 2024);

-- --------------------------------------------------------

--
-- Table structure for table `jollibee_category`
--

CREATE TABLE `jollibee_category` (
  `category_aid` int(11) NOT NULL,
  `category_is_active` tinyint(1) NOT NULL,
  `category_image` varchar(20) NOT NULL,
  `category_title` varchar(30) NOT NULL,
  `category_datetime` varchar(20) NOT NULL,
  `category_created` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `jollibee_category`
--

INSERT INTO `jollibee_category` (`category_aid`, `category_is_active`, `category_image`, `category_title`, `category_datetime`, `category_created`) VALUES
(18, 1, 'nav-chickenjoy.webp', 'Chickenjoy', '2024-12-11 15:25:12', 2024),
(19, 1, 'burger-1.webp', 'Yum Burger', '2024-12-11 15:25:41', 2024),
(20, 1, 'nav-spaghetti.webp', 'Spaghetti', '2024-12-11 15:05:12', 2024),
(21, 1, 'nav-sides.webp', 'Sides', '2024-12-11 15:06:23', 2024),
(29, 1, 'palabok-3.webp', 'Palabok', '2024-12-11 15:05:52', 2024),
(30, 1, 'dessert-1.webp', 'Desserts', '2024-12-11 15:06:13', 2024),
(31, 1, 'value-meal-1.webp', 'Value Meal', '2024-12-11 15:06:59', 2024),
(33, 1, 'steak-1.webp', 'Burger Steak', '2024-12-11 15:12:04', 2024);

-- --------------------------------------------------------

--
-- Table structure for table `jollibee_food`
--

CREATE TABLE `jollibee_food` (
  `food_aid` int(11) NOT NULL,
  `food_is_active` tinyint(1) NOT NULL,
  `food_image` varchar(20) NOT NULL,
  `food_title` varchar(30) NOT NULL,
  `food_price` int(20) NOT NULL,
  `food_category_id` int(11) NOT NULL,
  `food_datetime` varchar(30) NOT NULL,
  `food_created` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `jollibee_food`
--

INSERT INTO `jollibee_food` (`food_aid`, `food_is_active`, `food_image`, `food_title`, `food_price`, `food_category_id`, `food_datetime`, `food_created`) VALUES
(5, 0, '', 'teessssssssst', 1232, 23, '', 2024),
(13, 1, 'chicken-1.webp', '2pc Chickenjoy', 0, 18, '2024-12-11 15:40:14', 2024),
(14, 1, 'chicken-2.webp', '3pc Chickenjoy', 270, 18, '2024-12-11 15:40:47', 2024),
(15, 1, 'chicken-3.webp', '2pc Large  Fries w/ Bucket Chi', 400, 18, '2024-12-11 15:41:30', 2024),
(16, 1, 'chicken-4.webp', 'Spaghetti w/ Bucket Chickenjoy', 350, 18, '2024-12-11 15:42:16', 2024),
(17, 1, 'chicken-5.webp', 'Bucket Chicken w/ Fries', 320, 18, '2024-12-11 15:42:52', 2024),
(18, 1, 'chicken-6.webp', 'Bucket Chickenjoy', 290, 18, '2024-12-11 15:43:15', 2024),
(19, 1, 'burger-1.webp', 'Yum Burger', 60, 19, '2024-12-11 15:43:42', 2024),
(20, 1, 'burger-2.webp', 'Yum Burger w/ Fries', 79, 19, '2024-12-11 15:44:04', 2024),
(21, 1, 'burger-3.webp', 'Cheese Burger', 89, 19, '2024-12-11 15:44:24', 2024),
(22, 1, 'burger-4.webp', 'Yum Burger w/ Fries', 49, 19, '2024-12-11 15:44:48', 2024),
(23, 1, 'burger-5.webp', 'Large Burger', 129, 19, '2024-12-11 15:45:04', 2024),
(24, 1, 'burger-6.webp', 'Yum Burger w/ Fries', 79, 19, '2024-12-11 15:45:27', 2024),
(25, 1, 'burger-7.webp', 'Double Cheese Burger', 200, 19, '2024-12-11 15:45:45', 2024),
(26, 1, 'burger-8.webp', 'Double Cheese Burger w/Fries', 250, 19, '2024-12-11 15:46:08', 2024),
(27, 1, 'nav-spaghetti.webp', 'Spagetti', 90, 20, '2024-12-11 15:46:39', 2024),
(28, 1, 'spag-2.webp', 'Spaghetti w/ Chicken', 120, 20, '2024-12-11 15:47:25', 2024),
(29, 1, 'spag-3.webp', 'Family Spaghetti', 350, 20, '2024-12-11 15:47:47', 2024),
(30, 1, 'sides-1.webp', 'Regular Fries', 150, 21, '2024-12-11 15:48:10', 2024),
(31, 1, 'sides-2.webp', 'Mush Potato', 30, 21, '2024-12-11 15:48:29', 2024),
(32, 1, 'sides-3.webp', 'Rice', 30, 21, '2024-12-11 15:48:44', 2024),
(33, 1, 'sides-4.webp', 'Fried Rice', 32, 21, '2024-12-11 15:49:06', 2024),
(34, 1, 'sides-5.webp', 'Small Spaghetti', 25, 20, '2024-12-11 15:49:26', 2024),
(35, 1, 'nav-palabok.webp', 'Palabok', 90, 29, '2024-12-11 15:49:57', 2024),
(36, 1, 'palabok-2.webp', 'Palabok w/ Coke', 190, 29, '2024-12-11 15:50:19', 2024),
(37, 1, 'palabok-3.webp', 'Family Palabok', 400, 29, '2024-12-11 15:50:35', 2024),
(38, 1, 'palabok-4.webp', 'Family Palabok & Bucket Meal 3', 1000, 29, '2024-12-11 15:51:15', 2024),
(39, 1, 'dessert-1.webp', '2pc Peach Mango', 30, 30, '2024-12-11 15:51:34', 2024),
(40, 1, 'dessert-2.webp', '2pc Peach Ube', 90, 30, '2024-12-11 15:51:59', 2024),
(41, 1, 'dessert-3.webp', '5pc Peach Mango Pie', 5000, 30, '2024-12-11 15:52:20', 2024),
(42, 1, 'dessert-4.webp', 'Lemon Juice', 60, 30, '2024-12-11 15:52:34', 2024),
(43, 1, 'dessert-5.webp', 'Large Coke', 35, 30, '2024-12-11 15:52:47', 2024),
(44, 1, 'value-meal-1.webp', 'Chicken Burger Peach Mango w/ ', 399, 31, '2024-12-11 15:53:34', 2024),
(45, 1, 'value-meal-2.webp', '4 Chicken Burger', 400, 31, '2024-12-11 15:53:55', 2024),
(46, 1, 'value-meal-3.webp', '2pc Chickenjoy w/ Peach Mango ', 250, 31, '2024-12-11 15:54:40', 2024),
(47, 1, 'value-meal-4.webp', '3pcs Peach Mango & Bucket Meal', 500, 31, '2024-12-11 15:55:18', 2024),
(48, 1, 'value-meal-5.webp', '2 ChickenBurger & 2LargeFries ', 2005, 31, '2024-12-11 15:55:53', 2024),
(49, 1, 'steak-1.webp', 'Steak', 90, 33, '2024-12-16 10:04:32', 2024),
(50, 1, 'steak-2.webp', 'Family Steak', 6456, 33, '2024-12-11 15:56:29', 2024),
(51, 1, 'steak-3.webp', 'Family Steak & Bucket Meal w/ ', 600, 33, '2024-12-11 15:57:04', 2024);

-- --------------------------------------------------------

--
-- Table structure for table `jollibee_settings_role`
--

CREATE TABLE `jollibee_settings_role` (
  `role_aid` int(11) NOT NULL,
  `role_is_active` tinyint(1) NOT NULL,
  `role_name` varchar(50) NOT NULL,
  `role_description` text NOT NULL,
  `role_created` datetime NOT NULL,
  `role_datetime` datetime NOT NULL,
  `role_is_developer` tinyint(1) DEFAULT NULL,
  `role_is_sample` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `jollibee_settings_role`
--

INSERT INTO `jollibee_settings_role` (`role_aid`, `role_is_active`, `role_name`, `role_description`, `role_created`, `role_datetime`, `role_is_developer`, `role_is_sample`) VALUES
(3, 1, 'developer', 'developer', '2024-12-16 15:14:03', '2025-01-04 12:55:36', 1, 0);

-- --------------------------------------------------------

--
-- Table structure for table `jollibee_settings_user_developer`
--

CREATE TABLE `jollibee_settings_user_developer` (
  `user_developer_aid` int(11) NOT NULL,
  `user_developer_is_active` tinyint(1) NOT NULL,
  `user_developer_first_name` varchar(128) NOT NULL,
  `user_developer_last_name` varchar(128) NOT NULL,
  `user_developer_email` varchar(128) NOT NULL,
  `user_developer_new_email` varchar(128) NOT NULL,
  `user_developer_role_id` int(11) NOT NULL,
  `user_developer_key` varchar(255) NOT NULL,
  `user_developer_password` varchar(255) NOT NULL,
  `user_developer_created` datetime NOT NULL,
  `user_developer_datetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `jollibee_settings_user_developer`
--

INSERT INTO `jollibee_settings_user_developer` (`user_developer_aid`, `user_developer_is_active`, `user_developer_first_name`, `user_developer_last_name`, `user_developer_email`, `user_developer_new_email`, `user_developer_role_id`, `user_developer_key`, `user_developer_password`, `user_developer_created`, `user_developer_datetime`) VALUES
(3, 1, 'Emman', 'Diana', 'machbelli58@gmail.com', '', 3, '', '$2y$10$TKzrzyMXfLE.URXO0JZI.uF5kxEkh.u1khPXKf/DMKk7om/OhFYXa', '2025-01-04 13:02:45', '2025-01-04 14:01:12');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `jollibee_category`
--
ALTER TABLE `jollibee_category`
  ADD PRIMARY KEY (`category_aid`);

--
-- Indexes for table `jollibee_food`
--
ALTER TABLE `jollibee_food`
  ADD PRIMARY KEY (`food_aid`);

--
-- Indexes for table `jollibee_settings_role`
--
ALTER TABLE `jollibee_settings_role`
  ADD PRIMARY KEY (`role_aid`);

--
-- Indexes for table `jollibee_settings_user_developer`
--
ALTER TABLE `jollibee_settings_user_developer`
  ADD PRIMARY KEY (`user_developer_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `jollibee_category`
--
ALTER TABLE `jollibee_category`
  MODIFY `category_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=36;

--
-- AUTO_INCREMENT for table `jollibee_food`
--
ALTER TABLE `jollibee_food`
  MODIFY `food_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=52;

--
-- AUTO_INCREMENT for table `jollibee_settings_role`
--
ALTER TABLE `jollibee_settings_role`
  MODIFY `role_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `jollibee_settings_user_developer`
--
ALTER TABLE `jollibee_settings_user_developer`
  MODIFY `user_developer_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
