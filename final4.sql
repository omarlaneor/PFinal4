-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 15-03-2024 a las 16:59:50
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `final4`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `bitacoras`
--

CREATE TABLE `bitacoras` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `fecha` date NOT NULL,
  `hora` time NOT NULL,
  `descripcion` varchar(191) NOT NULL,
  `usuario` varchar(191) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `bitacoras`
--

INSERT INTO `bitacoras` (`id`, `fecha`, `hora`, `descripcion`, `usuario`) VALUES
(1, '2024-03-13', '13:50:11', 'Pagina creada con el id: 1', 'Pagina creada con el id: 1'),
(2, '2024-03-13', '15:13:22', 'Pagina creada con el id: 2', 'Pagina creada con el id: 2'),
(3, '2024-03-13', '15:20:05', 'Pagina creada con el id: 3', 'Pagina creada con el id: 3'),
(4, '2024-03-13', '19:44:49', 'Rol creado con el id: 1', 'Rol creado con el id: 1'),
(5, '2024-03-13', '19:45:06', 'Rol creado con el id: 2', 'Rol creado con el id: 2'),
(6, '2024-03-13', '19:45:24', 'Rol creado con el id: 3', 'Rol creado con el id: 3'),
(7, '2024-03-13', '20:08:05', 'Usuario creado con el id: 1', 'Usuario creado con el id: 1'),
(8, '2024-03-13', '20:08:45', 'Usuario creado con el id: 2', 'Usuario creado con el id: 2'),
(9, '2024-03-13', '20:09:10', 'Usuario creado con el id: 3', 'Usuario creado con el id: 3'),
(10, '2024-03-13', '20:09:31', 'Usuario creado con el id: 4', 'Usuario creado con el id: 4'),
(11, '2024-03-13', '22:38:52', 'Rol creado con el id: 4', 'Rol creado con el id: 4'),
(12, '2024-03-14', '04:21:50', 'Usuario creado con el id: 5', 'Usuario creado con el id: 5'),
(13, '2024-03-14', '04:35:49', 'Usuario creado con el id: 6', 'Usuario creado con el id: 6'),
(14, '2024-03-14', '17:28:37', 'Usuario creado con el id: 7', 'Usuario creado con el id: 7'),
(15, '2024-03-14', '17:29:21', 'Usuario creado con el id: 8', 'Usuario creado con el id: 8'),
(16, '2024-03-14', '17:43:10', 'Usuario creado con el id: 9', 'Usuario creado con el id: 9'),
(17, '2024-03-14', '17:52:18', 'Usuario creado con el id: 10', 'Usuario creado con el id: 10'),
(18, '2024-03-14', '17:53:53', 'Usuario creado con el id: 11', 'Usuario creado con el id: 11'),
(19, '2024-03-14', '18:00:47', 'Usuario creado con el id: 12', 'Usuario creado con el id: 12'),
(20, '2024-03-14', '20:35:56', 'Rol creado con el id: 5', 'Rol creado con el id: 5'),
(21, '2024-03-14', '20:37:04', 'Rol creado con el id: 6', 'Rol creado con el id: 6'),
(22, '2024-03-14', '20:39:54', 'Rol creado con el id: 7', 'Rol creado con el id: 7'),
(23, '2024-03-14', '20:40:47', 'Rol creado con el id: 8', 'Rol creado con el id: 8'),
(24, '2024-03-14', '20:49:23', 'Rol creado con el id: 9', 'Rol creado con el id: 9'),
(25, '2024-03-14', '21:50:23', 'Usuario creado con el id: 13', 'Usuario creado con el id: 13'),
(26, '2024-03-14', '21:51:32', 'Usuario creado con el id: 14', 'Usuario creado con el id: 14'),
(27, '2024-03-14', '21:53:58', 'Usuario creado con el id: 15', 'Usuario creado con el id: 15'),
(28, '2024-03-14', '21:55:28', 'Usuario creado con el id: 16', 'Usuario creado con el id: 16'),
(29, '2024-03-14', '22:00:05', 'Usuario creado con el id: 17', 'Usuario creado con el id: 17'),
(30, '2024-03-14', '22:00:55', 'Rol creado con el id: 10', 'Rol creado con el id: 10'),
(31, '2024-03-14', '22:02:50', 'Rol creado con el id: 11', 'Rol creado con el id: 11'),
(32, '2024-03-15', '05:15:48', 'Rol creado con el id: 12', 'Rol creado con el id: 12');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(191) NOT NULL,
  `connection` text NOT NULL,
  `queue` text NOT NULL,
  `payload` longtext NOT NULL,
  `exception` longtext NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(191) NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_reset_tokens_table', 1),
(3, '2019_08_19_000000_create_failed_jobs_table', 1),
(4, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(5, '2024_03_11_204802_create_rols_table', 1),
(6, '2024_03_11_204852_create_paginas_table', 1),
(7, '2024_03_11_204906_create_usuarios_table', 1),
(8, '2024_03_11_204924_create_bitacoras_table', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `paginas`
--

CREATE TABLE `paginas` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `nombre` varchar(191) NOT NULL,
  `descripcion` varchar(191) NOT NULL,
  `url` varchar(191) NOT NULL,
  `usuario_creacion` varchar(191) NOT NULL,
  `fecha_creacion` date NOT NULL,
  `fecha_modificacion` date NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `paginas`
--

INSERT INTO `paginas` (`id`, `nombre`, `descripcion`, `url`, `usuario_creacion`, `fecha_creacion`, `fecha_modificacion`, `created_at`, `updated_at`) VALUES
(1, 'Google', 'Buscador', 'www.google.com', 'OmarLane', '2024-03-13', '2024-03-13', '2024-03-13 18:50:11', '2024-03-13 18:50:11'),
(2, 'Youtube', 'Buscador de Videos', 'www.youtube.com', 'OmarLane', '2024-03-13', '2024-03-13', '2024-03-13 20:13:22', '2024-03-13 20:13:22'),
(3, 'Church', 'Página de la Iglesia', 'www.churchofjesuschrist.org', 'OmarLane', '2024-03-13', '2024-03-13', '2024-03-13 20:20:05', '2024-03-13 20:20:05');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `password_reset_tokens`
--

CREATE TABLE `password_reset_tokens` (
  `email` varchar(191) NOT NULL,
  `token` varchar(191) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(191) NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(191) NOT NULL,
  `token` varchar(64) NOT NULL,
  `abilities` text DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `rols`
--

CREATE TABLE `rols` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `rol` varchar(191) NOT NULL,
  `fechacreacion` date NOT NULL,
  `fechamodificacion` date NOT NULL,
  `estado` varchar(191) NOT NULL,
  `cambiar_estado` varchar(191) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `rols`
--

INSERT INTO `rols` (`id`, `rol`, `fechacreacion`, `fechamodificacion`, `estado`, `cambiar_estado`, `created_at`, `updated_at`) VALUES
(1, 'Gerente', '2024-01-22', '2024-02-22', 'Activo', 'Inactivo', '2024-03-14 00:44:49', '2024-03-14 00:44:49'),
(2, 'Administrador', '2024-01-22', '2024-02-22', 'Activo', 'Inactivo', '2024-03-14 00:45:06', '2024-03-14 00:45:06'),
(3, 'Usuario', '2024-01-22', '2024-02-22', 'Activo', 'Inactivo', '2024-03-14 00:45:23', '2024-03-14 00:45:23'),
(4, 'Usuario', '2024-01-22', '2024-02-22', 'Activo', 'Inactivo', '2024-03-14 03:38:51', '2024-03-14 03:38:51'),
(5, 'Vendedor en Vitrina', '2024-02-26', '2024-03-14', 'Activo', 'Inactivo', '2024-03-15 01:35:55', '2024-03-15 01:35:55'),
(6, 'Stock', '2024-02-28', '2024-03-14', 'Activo', 'Inactivo', '2024-03-15 01:37:04', '2024-03-15 01:37:04'),
(7, 'Full Stack', '2024-01-09', '2024-03-14', 'Activo', 'Inactivo', '2024-03-15 01:39:53', '2024-03-15 01:39:53'),
(8, 'Designer', '2024-03-13', '2024-03-13', 'Activo', 'Inactivo', '2024-03-15 01:40:47', '2024-03-15 01:40:47'),
(9, 'Marketing Representant', '2024-03-01', '2024-03-13', 'Inactivo', 'Activo', '2024-03-15 01:49:22', '2024-03-15 01:49:22'),
(10, 'Supervisor', '2024-03-04', '2024-03-05', 'Activo', 'Inactivo', '2024-03-15 03:00:54', '2024-03-15 03:00:54'),
(11, 'Almacenista', '2024-03-04', '2024-03-13', 'Activo', 'Inactivo', '2024-03-15 03:02:49', '2024-03-15 03:02:49'),
(12, 'Veterinario', '2024-03-04', '2024-03-20', 'Activo', 'Inactivo', '2024-03-15 10:15:48', '2024-03-15 10:15:48');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(191) NOT NULL,
  `email` varchar(191) NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(191) NOT NULL,
  `remember_token` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `email_verified_at`, `password`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'OmarLaneSu', 'omarlanesu@gmail.com', NULL, '$2y$12$/gGqr8h4MUw9G7UXatJuq.xh.NcM4dgV.kAHZnpFTsY4XfnJaVFfW', NULL, '2024-03-15 05:17:39', '2024-03-15 05:17:39'),
(2, 'Roshi Pérez', 'maestroroshi@gmail.com', NULL, '$2y$12$KhNkRQfU2bio4N63IS6nEOmg8ubI4CD.gYP.zs2YgUGAu64jNp.Gi', NULL, '2024-03-15 06:12:33', '2024-03-15 06:12:33'),
(3, 'Clark Kent', 'supisupi@gmail.com', NULL, '$2y$12$hPqlp.98.Aaa8.2PybgGg.EguqPR0ibjk4MmgAvG/PJhGs4/me.OW', NULL, '2024-03-15 10:18:18', '2024-03-15 10:18:18');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `usuario` varchar(191) NOT NULL,
  `nombre` varchar(191) NOT NULL,
  `apellido` varchar(191) NOT NULL,
  `email` varchar(191) NOT NULL,
  `password` varchar(191) NOT NULL,
  `fecha` date NOT NULL,
  `idrol` bigint(20) UNSIGNED NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `usuario`, `nombre`, `apellido`, `email`, `password`, `fecha`, `idrol`, `created_at`, `updated_at`) VALUES
(2, 'AnnieLane', 'Annie', 'Osorio', 'annie@gmail.com', '$2y$12$2qCDv9uhdCcHgjJX3UrD.u4f.At8GbE80xzhig72spvyp1JGwdmQ.', '2024-03-06', 2, '2024-03-14 01:08:44', '2024-03-14 01:08:44'),
(3, 'Joys', 'Joyssy', 'Osorio', 'joyssy@gmail.com', '$2y$12$wm4DKvsSE5IhkGwuGj4SHOYdiyKAivQQYEPHFrp/WsaBSMS5bb5Zq', '2024-03-06', 2, '2024-03-14 01:09:10', '2024-03-14 01:09:10'),
(4, 'SusanLane', 'Susan', 'Osorio', 'susie@gmail.com', '$2y$12$UWOEqswPxDBHdukhLDIxeeAk2k28dr.1oDX6rXsrl997w7Y3RbzCq', '2024-03-06', 2, '2024-03-14 01:09:31', '2024-03-14 01:09:31'),
(5, 'OmarLane', 'Omar Junior', 'Osorio', 'omarlane@gmail.com', '$2y$12$r32yo7Hg9Ppt.d8CLVexdO6OQjSvkneVuwqKPol2KyPGK6FKxaz92', '2024-03-06', 1, '2024-03-14 09:21:49', '2024-03-14 09:21:49'),
(6, 'MamiLane', 'Annie Lane', 'Osorio', 'annielaneor@gmail.com', '$2y$12$w7cWrZQHoO1f6t7wclo4eenyFbS7y1ZkkgyOEoVsP0cAVozz4TIp2', '2024-03-06', 2, '2024-03-14 09:35:49', '2024-03-14 09:35:49'),
(7, 'Victor', 'Omar Junior', 'Osorio León', '123123@hotmail.com', '$2y$12$nPzgoBNZ2henSo4Eij6oPOBXv/1Q08MqJom6fBZ2C.o0ATAMr8R4S', '2024-03-07', 1, '2024-03-14 22:28:37', '2024-03-14 22:28:37'),
(8, 'Mianossa', 'Omar Junior123', 'Osorio León111', '12233l@hotmail.com', '$2y$12$oNAscI/ptqj/RfcG2dlamuVwM7HUun2Cad85vEL0Q23Ozej4eEXMu', '2024-03-08', 1, '2024-03-14 22:29:20', '2024-03-14 22:29:20'),
(9, 'Mianossa', 'Miguel', 'Osorio', 'mianossa@gmail.com', '$2y$12$g.0NfHucJpI0cq/Bm6xe4e0L4RTb.xkZin.YZs0iMr/sPDkfWnkkW', '2024-03-04', 1, '2024-03-14 22:43:09', '2024-03-14 22:43:09'),
(10, 'Gokú', 'Akira', 'Toriyama', 'kakarotto@gmail.com', '$2y$12$/6rcLBtIzkeBMdJCFT3E4.b0nbMrYVa66ZGo1/FihOlZoxdQ4EA12', '2024-03-08', 1, '2024-03-14 22:52:17', '2024-03-14 22:52:17'),
(11, 'Ali', 'Ali', 'Baba', 'alibaba@gmail.com', '$2y$12$DIen7EvcYI2bV7yr6uRq6OZGxIV//Ie6491Vxqc1dLVGmOHac4soe', '2024-02-13', 3, '2024-03-14 22:53:52', '2024-03-14 22:53:52'),
(12, 'Vegeta', 'Vegeta', 'Osorio', 'vegito@gmail.com', '$2y$12$vZ9UbqhrOsv.NheQy0qNau3h45DE20UMxz7vR3GlmVOdR.QzdcIii', '2024-03-03', 1, '2024-03-14 23:00:46', '2024-03-14 23:00:46'),
(13, 'Joyssy', 'Joyssy Loca', 'Rodríguez', 'joyssyloca@gmail.com', '$2y$12$3M1I/N3gsQyelO2F0gmlIek/rrYkAMN5wfZb65XqNw7LaXA4wHzT.', '2024-03-14', 2, '2024-03-15 02:50:22', '2024-03-15 02:50:22'),
(14, 'JoyssyLaneSu', 'Joyssy Bella', 'Osorio', 'joyssybella@gmail.com', '$2y$12$wEKm/v5i93m0/VetfF9gYeJwXAlrqPArXicFmoTvQBto4fLKpLbPO', '2024-03-04', 2, '2024-03-15 02:51:31', '2024-03-15 02:51:31'),
(15, 'Bulma', 'Bulma', 'de Vegito', 'bulma@gmail.com', '$2y$12$c7T21Kr7N48pArGU6h1HXuHpa02Jz.y736G3V2NzSaVG/1W.A0az2', '2024-02-29', 1, '2024-03-15 02:53:57', '2024-03-15 02:53:57'),
(16, 'Chichi', 'Chichi', 'Ox', 'chicho@gmail.com', '$2y$12$Aj3Ef.VLZapqIHh9cJTZ9uIesxB0VOF2VStKdnOsBgm2UA8pA5r9G', '2024-03-12', 4, '2024-03-15 02:55:27', '2024-03-15 02:55:27'),
(17, 'Trunks', 'Trunks', 'Butaker', 'trunks@gmail.com', '$2y$12$zT4.w/IjxL7kHlyhCCbyeO9d43hxbsB30UjDZbAB3zydiApJ898GK', '2024-02-26', 2, '2024-03-15 03:00:04', '2024-03-15 03:00:04');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `bitacoras`
--
ALTER TABLE `bitacoras`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indices de la tabla `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `paginas`
--
ALTER TABLE `paginas`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `password_reset_tokens`
--
ALTER TABLE `password_reset_tokens`
  ADD PRIMARY KEY (`email`);

--
-- Indices de la tabla `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indices de la tabla `rols`
--
ALTER TABLE `rols`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`),
  ADD KEY `usuarios_idrol_foreign` (`idrol`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `bitacoras`
--
ALTER TABLE `bitacoras`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;

--
-- AUTO_INCREMENT de la tabla `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de la tabla `paginas`
--
ALTER TABLE `paginas`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `rols`
--
ALTER TABLE `rols`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD CONSTRAINT `usuarios_idrol_foreign` FOREIGN KEY (`idrol`) REFERENCES `rols` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
