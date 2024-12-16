<?php

// Read all by category
function checkReadAllByCategoryId($object)
{
    $query = $object->ReadAllByCategoryId();
    checkQuery($query, "Empty records. (read All)");
    return $query;
}